import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: { books: null },
  reducers: {},
});

export const {} = bookSlice.actions;
export default bookSlice.reducer;
