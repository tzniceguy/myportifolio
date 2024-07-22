import React from "react";
import BlogTable from "./components/blogtable";
import { fetchPosts } from "../api/api";

export default function Page() {
  return (
    <div className="">
      <BlogTable />
    </div>
  );
}
