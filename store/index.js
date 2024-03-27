import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./userListSlice/userListSlice";

export default configureStore({
  reducer: {
    userList: userListSlice,
  },
});
