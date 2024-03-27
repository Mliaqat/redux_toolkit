"use client";

import { useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((state) => state.userList);

  console.log(data, "DATAT");

  return <p>Test</p>;
}
