import { useContext, useEffect } from 'react';

// Styles
import { Container } from './Categories-overview.style';

// Utilities
import { CategoryContext } from '../../contexts/category.context';

export const CategoriesOverview = () => {
  const { categories, fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {categories.map((category) => (
        <p key={category.id}>{category.displayName}</p>
      ))}
    </Container>
  );
};
