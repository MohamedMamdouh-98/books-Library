import { configureStore } from "@reduxjs/toolkit";
import books from "../store/bookSlice";
import auth from "../store/authSlice";

export const store = configureStore({
  reducer: {
    books,
    auth,
  },
});
