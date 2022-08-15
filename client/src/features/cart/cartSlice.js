import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [ ...state.items, action.payload ];
    },
    removeFromCart: (state, action) => {
      state.items.splice(action.payload, 1);
    },
  },
});

export const { addToCart, removeFromCart } = counterSlice.actions;
export const cartCount = (state) => state.cart.items.length;
export const cartItems = (state) => state.cart.items;

export default counterSlice.reducer;
