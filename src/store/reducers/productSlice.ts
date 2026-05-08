import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types';
import { productsData } from '../../data/products';

interface ProductState {
  products: Product[];
  selectedCategory: string | null;
  currentIndex: number;
  prodcuctPrice: number;
  currentProductID: number;
  quantity: number;
  galleryScrollPosition: number;
}

const initialState: ProductState = {
  products: productsData.products,
  selectedCategory: 'Camiseta',
  currentIndex: 0,
  prodcuctPrice: 0,
  currentProductID: 1,
  quantity: 0,
  galleryScrollPosition: 0,
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
    setProductPrice: (state, action: PayloadAction<number>) => {
      state.prodcuctPrice = action.payload;
    },
    setCurrentProductID: (state, action: PayloadAction<number>) => {
      state.currentProductID = action.payload;
    },
    setGalleryScrollPosition: (state, action: PayloadAction<number>) => {
      state.galleryScrollPosition = action.payload;
    },
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    nextCategory: (state) => {
      const categories = Array.from(new Set(state.products.map((p) => p.categories)));
      const currentIndex = categories.indexOf(state.selectedCategory || '');
      const nextIndex = (currentIndex + 1) % categories.length;
      state.selectedCategory = categories[nextIndex];
      state.currentIndex = 0;
    },
    previousCategory: (state) => {
      const categories = Array.from(new Set(state.products.map((p) => p.categories)));
      const currentIndex = categories.indexOf(state.selectedCategory || '');
      const prevIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
      state.selectedCategory = categories[prevIndex];
      state.currentIndex = 0;
    },
  },
});

export const { selectCategory, setCurrentIndex, setProductPrice,setGalleryScrollPosition, nextCategory, previousCategory, setCurrentProductID, setQuantity } = productSlice.actions;
export default productSlice.reducer;
