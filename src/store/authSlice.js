import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogIn: false, name: "mohamed mamdouh" },
  reducers: {
    logInOut: (state) => {
      state.isLogIn = !state.isLogIn;
    },
  },
});

export const { logInOut } = authSlice.actions;
export default authSlice.reducer;
