import { FunctionComponent, useContext } from 'react';
import { BsCartPlus } from 'react-icons/bs';

// Components
import { CustomButtom } from '../custom-buttom/Custom-buttom';

// Styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
} from './Product-item.styles';

// Utilities
import Product from '../../types/products.types';
import { CartContext } from '../../contexts/cart.context';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FunctionComponent<ProductItemProps> = ({
  product,
}) => {
  const { addProductToCart } = useContext(CartContext);

  const handleAddToCartClick = () => {
    addProductToCart(product);
  };

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButtom startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Adicionar ao carrinho
        </CustomButtom>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  );
};
