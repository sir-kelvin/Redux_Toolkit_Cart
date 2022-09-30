import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleCloseModal: (state, action) => {
      // console.log(state);
      state.isModalOpen = false;
    },
    handleOpenModal: (state, action) => {
      state.isModalOpen = true;
    },
  },
});

export const { handleCloseModal, handleOpenModal } = modalReducer.actions;

export default modalReducer.reducer;
