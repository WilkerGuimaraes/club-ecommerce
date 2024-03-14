import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

// Utilities
import Category from '../../types/category.types';

// Styles
import { CategoryItemContainer, CategoryName } from './Category-item.styles';

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem: FunctionComponent<CategoryItemProps> = ({
  category,
}) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`);
  };

  return (
    <CategoryItemContainer $backgroundImage={category.imageUrl}>
      <CategoryName onClick={handleExploreClick}>
        <p>{`${category.displayName}`}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  );
};
