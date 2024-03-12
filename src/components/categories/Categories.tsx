import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

// Components
import { CategoryItem } from '../category-item/Category-item';

// Utilities
import Category from '../../types/category.types';
import { db } from '../../config/firebase.config';
import { categoryConverter } from '../../converters/firestore.converters';

// Styles
import { CategoriesContainer, CategoriesContent } from './Categories.styles';

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = [];

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter),
      );

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data());
      });

      setCategories(categoriesFromFirestore);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
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
