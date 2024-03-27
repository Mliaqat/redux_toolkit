import { createSlice } from "@reduxjs/toolkit";


export const userListSlice = createSlice({
  name: "userList",
  initialState: [
    {
      name: "ali",
    },
  ],
  reducers: {
    addUser: (state,action) => {
      state.push(action.payload);
    },
    deleteUser: (state) => {
      state.push({ name: "Liaqat" });
    },
  },
});


export const {addUser,deleteUser} =userListSlice.actions

export default userListSlice.reducer