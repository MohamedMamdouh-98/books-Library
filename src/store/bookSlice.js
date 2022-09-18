import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//call Api
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//create reducer
const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLoading: false },
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
    },

    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload
    },

    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action);
    },
  },
});

export default bookSlice.reducer;
