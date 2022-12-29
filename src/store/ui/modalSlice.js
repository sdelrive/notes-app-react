import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
  },
  reducers: {
    closeModal: (state) => {
      state.open = false;
    },
    openModal: (state, { payload }) => {
      state.open = true;
      console.log("menu abierto");
    },
    toggleModal: (state, { payload }) => {
      state.open = !state.open;
      console.log("menu abierto");
    },
  },
});

export const { closeModal, openModal, toggleModal } = modalSlice.actions;
