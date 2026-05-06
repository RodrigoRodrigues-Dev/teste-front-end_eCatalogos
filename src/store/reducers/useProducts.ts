import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '..';
import { selectCategory, setCurrentIndex } from './productSlice';
import { selectAllProducts, selectSelectedCategory, selectCategories, selectFilteredProducts, selectCurrentIndex } from '../selectors';

export const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();

  const allProducts = useSelector(selectAllProducts);
  const selectedCategory = useSelector(selectSelectedCategory);
  const categories = useSelector(selectCategories);
  const filteredProducts = useSelector(selectFilteredProducts);
  const currentIndex = useSelector(selectCurrentIndex);

  const handleSelectCategory = (category: string | null) => {
    if (category !== null) {
      dispatch(selectCategory(category));
    }
  };

  const handleSetCurrentIndex = (index: number) => {
    dispatch(setCurrentIndex(index));
  };

  return {
    allProducts,
    categories,
    selectedCategory,
    filteredProducts,
    currentIndex,
    selectCategory: handleSelectCategory,
    setCurrentIndex: handleSetCurrentIndex,
  };
};
