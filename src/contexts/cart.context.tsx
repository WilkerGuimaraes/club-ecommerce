import { ReactNode, createContext, useState } from 'react';
import CartProduct from '../types/cart.types';
import Product from '../types/products.types';

interface ICartContext {
  isVisible: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProductToCart: (product: Product) => void;
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setVisible] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);

  const toggleCart = () => {
    setVisible((prevState) => !prevState);
  };

  const addProductToCart = (product: Product) => {
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addProductToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
