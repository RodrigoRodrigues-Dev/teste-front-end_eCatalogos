import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types';
import { productsData } from '../../data/products';

interface ProductState {
  products: Product[];
  selectedCategory: string | null;
  currentIndex: number;
}

const initialState: ProductState = {
  products: productsData.products,
  selectedCategory: 'Camiseta',
  currentIndex: 0,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      state.currentIndex = 0;
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { selectCategory, setCurrentIndex } = productSlice.actions;
export default productSlice.reducer;
