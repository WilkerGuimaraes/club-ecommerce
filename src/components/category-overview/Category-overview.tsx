import { FunctionComponent } from 'react';

import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer,
} from './Category-overview.styles';

import Category from '../../types/category.types';

interface CategoryQueryProps {
  category: Category;
}

export const CategoryOverview: FunctionComponent<CategoryQueryProps> = ({
  category,
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer></ProductsContainer>
    </CategoryContainer>
  );
};
