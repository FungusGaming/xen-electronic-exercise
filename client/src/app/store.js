import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import messageReducer from '../features/message/messageSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    message: messageReducer,
    user: userReducer
  },
});
