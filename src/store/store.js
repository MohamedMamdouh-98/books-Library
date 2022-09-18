import { configureStore } from "@reduxjs/toolkit";
import books from "../store/bookSlice";

export const store = configureStore({
  reducer: {
    books,
  },
});
