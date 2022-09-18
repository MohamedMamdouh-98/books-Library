import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//call Api
const getBooks = createAsyncThunk("book/getBooks", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3005/books");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

//create reducer
const bookSlice = createSlice({
  name: "book",
  initialState: { books: null },
  reducers: {},
});

export const {} = bookSlice.actions;
export default bookSlice.reducer;
