import { useContext } from 'react';
import { BsBagCheck } from 'react-icons/bs';

import { CartContext } from '../../contexts/cart.context';
import { CustomButtom } from '../custom-buttom/Custom-buttom';
import { CartItem } from '../cart-item/Cart-item';

import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal,
} from './Checkout.style';

export const Checkout = () => {
  const { products, productsTotalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>
          <CustomButtom startIcon={<BsBagCheck />}>
            Finalizar Compra
          </CustomButtom>
        </>
      ) : (
        <p>Seu carrinho está vazio!</p>
      )}
    </CheckoutContainer>
  );
};
