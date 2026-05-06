import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './index';

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectSelectedCategory = (state: RootState) => state.products.selectedCategory;
export const selectCurrentIndex = (state: RootState) => state.products.currentIndex;

export const selectCategories = createSelector(
  [selectAllProducts],
  (products) => Array.from(new Set(products.map((p) => p.categories)))
);

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectSelectedCategory],
  (products, selectedCategory) =>
    selectedCategory
      ? products.filter((p) => p.categories === selectedCategory)
      : products
);
