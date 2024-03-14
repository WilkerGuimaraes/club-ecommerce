import { useContext } from 'react';
import { BsCartCheck } from 'react-icons/bs';

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
  const { isVisible, products, toggleCart } = useContext(CartContext);

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        <CartTotal>Total R$999</CartTotal>
        <CustomButtom startIcon={<BsCartCheck />}>
          Ir para o Checkout
        </CustomButtom>
      </CartContent>
    </CartContainer>
  );
};
