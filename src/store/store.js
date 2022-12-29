import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { modalSlice } from "./ui/modalSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
  },
});
