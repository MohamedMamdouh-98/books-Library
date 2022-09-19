import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//call Api
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

//create reducer
const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLoading: false, error: null },
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },

    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      state.error = null;
    },

    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
