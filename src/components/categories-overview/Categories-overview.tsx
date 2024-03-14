import { useContext, useEffect } from 'react';

// Styles
import { Container } from './Categories-overview.styles';

// Utilities
import { CategoryContext } from '../../contexts/category.context';

// Components
import { CategoryOverview } from '../category-overview/Category-overview';
import { Loading } from '../loading/Loading';

export const CategoriesOverview = () => {
  const { categories, isLoading, fetchCategories } =
    useContext(CategoryContext);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  );
};
