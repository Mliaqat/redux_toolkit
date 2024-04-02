"use client";

import {
  addUser,
  fetchUser,
  statusData,
  userData,
} from "@/store/userListSlice/userListSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const data = useSelector(userData);
  const status = useSelector(statusData);

  const dispatch = useDispatch();

  console.log(data, "DATAT", status);

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchUser());
    }
  }, [status, dispatch]);
  return (
    <>
      <p>Test</p>
      <button>Add User</button>
    </>
  );
}
