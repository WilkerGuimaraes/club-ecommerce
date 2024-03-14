import { FunctionComponent } from 'react';

// Styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
} from './Product-item.styles';

// Utilities
import Product from '../../types/products.types';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FunctionComponent<ProductItemProps> = ({
  product,
}) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  );
};
