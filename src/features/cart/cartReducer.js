import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import data from '../../data';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};
export const handleFetchCartItems = createAsyncThunk(
  'cart/handleFetchCartItems',
  () => {
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
);
const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state, action) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemID = action.payload.id;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },
    increase: (state, action) => {
      const itemID = action.payload.id;
      const singleItem = state.cartItems.find((item) => {
        return item.id === itemID;
      });
      singleItem.amount = singleItem.amount + 1;
    },
    decrease: (state, action) => {
      const itemID = action.payload.id;
      const singleItem = state.cartItems.find((item) => item.id === itemID);
      singleItem.amount = singleItem.amount - 1;
    },
    calculateCartTotal: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount = amount + item.amount;
        total = total + item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [handleFetchCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [handleFetchCartItems.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [handleFetchCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// console.log(cartSlice)
export const { clearCart, removeItem, increase, decrease, calculateCartTotal } =
  cartReducer.actions;

export default cartReducer.reducer;
