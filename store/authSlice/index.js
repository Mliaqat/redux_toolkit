import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "isLogin",
  initialState: initialState,
  reducers: {
    login(state) {
      state = true;
    },
    logout(state) {
      state = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
