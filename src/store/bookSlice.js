import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//call Api & get data from json server
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//create thunk insert book
export const insertBook = createAsyncThunk(
  "book/insertBooks",
  async (bookData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//create reducer
const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLoading: false, error: null },
  extraReducers: {
    //get books
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },

    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },

    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //insert insert books
    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
