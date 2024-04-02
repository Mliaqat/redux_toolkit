import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./userListSlice/userListSlice";
import authSlice from "./authSlice";

export default configureStore({
  reducer: {
    userList: userListSlice,
    auth: authSlice,
  },
});
