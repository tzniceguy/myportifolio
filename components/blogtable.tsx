"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchPosts } from "@/api/api";
import { Post } from "@/lib/post";

export default function BlogTable() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      <table className="w-full table-auto text-md  md:text-md text-left rtl:text-right">
        <thead>
          <tr>
            <th>date</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b hover:bg-marshland-500">
              <td>{post.created_at}</td>
              <td>
                <Link href={`blog/posts/${post.slug}`}>{post.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
