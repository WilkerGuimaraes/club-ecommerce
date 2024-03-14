import { FunctionComponent, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { BiChevronLeft } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

// Utilities
import Category from '../../types/category.types';
import { db } from '../../config/firebase.config';
import { categoryConverter } from '../../converters/firestore.converters';

// Components
import { Loading } from '../loading/Loading';
import { ProductItem } from '../product-item/Product-item';

// Styles
import {
  Container,
  CategoryTitle,
  IconContainer,
  ProductsContainer,
} from './Category-details.style';

interface CategoryDetailsProps {
  categoryId: string;
}

export const CategoryDetails: FunctionComponent<CategoryDetailsProps> = ({
  categoryId,
}) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId),
          ),
        );

        const category = querySnapshot.docs[0]?.data();

        setCategory(category);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <CategoryTitle>
        <IconContainer onClick={handleBackClick}>
          <BiChevronLeft size={36} />
        </IconContainer>
        <p>Explorar {category?.displayName}</p>
      </CategoryTitle>

      <ProductsContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
};
