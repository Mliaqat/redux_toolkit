"use client";

import { addUser } from "@/store/userListSlice/userListSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((state) => state.userList);

  const dispatch = useDispatch();

  console.log(data, "DATAT");

  const handleUser = () => {
    dispatch(addUser({ name: "NewLiaqat" }));
  };

  return (
    <>
      <p>Test</p>
      <button onClick={handleUser} >Add User</button>
    </>
  );
}
