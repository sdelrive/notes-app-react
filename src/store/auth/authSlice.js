import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "authenticated", // not-authenticated    -    checking
    user: {
      name: "Santiago",
      email: "santi@google.com",
      uid: "123",
    },
    errorMessage: null,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
