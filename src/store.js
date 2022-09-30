import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartReducer';
import modalReducer from './features/modal/modalReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
