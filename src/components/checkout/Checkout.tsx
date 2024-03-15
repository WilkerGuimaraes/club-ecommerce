import { useContext, useState } from 'react';
import { BsBagCheck } from 'react-icons/bs';
import axios from 'axios';

import { CartContext } from '../../contexts/cart.context';
import { CustomButtom } from '../custom-buttom/Custom-buttom';
import { CartItem } from '../cart-item/Cart-item';

import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal,
} from './Checkout.style';
import { Loading } from '../loading/Loading';

export const Checkout = () => {
  const { products, productsTotalPrice } = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-checkout-session`,
        {
          products,
        },
      );

      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CheckoutContainer>
      {isLoading && <Loading />}
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>
          <CustomButtom
            startIcon={<BsBagCheck />}
            onClick={handleFinishPurchaseClick}
          >
            Finalizar Compra
          </CustomButtom>
        </>
      ) : (
        <p>Seu carrinho está vazio!</p>
      )}
    </CheckoutContainer>
  );
};
