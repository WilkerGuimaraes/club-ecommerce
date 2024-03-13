import { useContext, useEffect } from 'react';

// Components
import { CategoryItem } from '../category-item/Category-item';
import { Loading } from '../loading/Loading';

// Utilities
import { CategoryContext } from '../../contexts/category.context';

// Styles
import { CategoriesContainer, CategoriesContent } from './Categories.styles';

export const Categories = () => {
  const { categories, isLoading, fetchCategories } =
    useContext(CategoryContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};
