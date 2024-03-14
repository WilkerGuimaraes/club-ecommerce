import { FunctionComponent } from 'react';

// Styles
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer,
} from './Category-overview.styles';

// Utilities
import Category from '../../types/category.types';

// Components
import { ProductItem } from '../product-item/Product-item';

interface CategoryQueryProps {
  category: Category;
}

export const CategoryOverview: FunctionComponent<CategoryQueryProps> = ({
  category,
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer>
        {category.products.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  );
};
