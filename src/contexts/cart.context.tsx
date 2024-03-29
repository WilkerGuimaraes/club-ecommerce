import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import CartProduct from '../types/cart.types';
import Product from '../types/products.types';

interface ICartContext {
  isVisible: boolean;
  productsTotalPrice: number;
  productsCount: number;
  products: CartProduct[];
  toggleCart: () => void;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
  clearProducts: () => void;
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  productsTotalPrice: 0,
  productsCount: 0,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {},
  clearProducts: () => {},
});

const PRODUCTS_STORAGE_KEY = '@fsw-store/products';

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setVisible] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    const productsFromLocalStorage = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (productsFromLocalStorage) {
      setProducts(JSON.parse(productsFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    }, 0);
  }, [products]);

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity;
    }, 0);
  }, [products]);

  const productsCount = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.quantity;
    }, 0);
  }, [products]);

  const toggleCart = () => {
    setVisible((prevState) => !prevState);
  };

  const addProductToCart = (product: Product) => {
    const productIsAlreadyInCart = products.some(
      (item) => item.id === product.id,
    );

    if (productIsAlreadyInCart) {
      return setProducts((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  const removeProductFromCart = (productId: string) => {
    setProducts((products) =>
      products.filter((product) => product.id !== productId),
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        )
        .filter((product) => product.quantity > 0),
    );
  };

  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        isVisible,
        productsTotalPrice,
        products,
        productsCount,
        toggleCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        clearProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
