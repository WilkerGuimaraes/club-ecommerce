import { useContext } from 'react';
import { BsCartCheck } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

// Utilities
import { CartContext } from '../../contexts/cart.context';

// Components
import { CustomButtom } from '../custom-buttom/Custom-buttom';
import { CartItem } from '../cart-item/Cart-item';

// Styles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal,
} from './Cart.styles';

export const Cart = () => {
  const { isVisible, products, productsTotalPrice, productsCount, toggleCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const handleGotToCheckoutNavigate = () => {
    navigate('/checkout');
    toggleCart();
  };

  return (
    <CartContainer $isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <>
            <CartTotal>Total R${productsTotalPrice}</CartTotal>
            <CustomButtom
              startIcon={<BsCartCheck />}
              onClick={handleGotToCheckoutNavigate}
            >
              Ir para o Checkout
            </CustomButtom>
          </>
        )}

        {productsCount === 0 && <p>Seu carrinho está vazio.</p>}
      </CartContent>
    </CartContainer>
  );
};
