import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type CartState = Record<number, Record<number, number>>;

const initialState: CartState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<{ productId: number; skuId: number; quantity: number }>) => {
      const { productId, skuId, quantity } = action.payload;
      if (!state[productId]) {
        state[productId] = {};
      }
      if (quantity === 0) {
        delete state[productId][skuId];
      } else {
        state[productId][skuId] = quantity;
      }
    },
    clearCart: () => initialState,
    clearProduct: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
  },
});

export const { setQuantity, clearCart, clearProduct } = cartSlice.actions;
export default cartSlice.reducer;
