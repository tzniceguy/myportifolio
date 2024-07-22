import { fetchPost, fetchPosts } from "@/app/api/api";
import { Post } from "../../../interfaces/post";

export async function generateStaticParams() {
  const response = await fetchPosts();

  return response.map((post: Post) => ({
    slug: post.slug,
  }));
}

//fetching data for specific post
async function getPostData(slug: Post) {
  try {
    const post = await fetchPost(slug);
    return post;
  } catch (error) {
    return null;
  }
}

export default async function Page({ params }: { params: { slug: Post } }) {
  const { slug } = params;
  const post = await getPostData(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
      <div>{post.created_at}</div>
    </article>
  );
}
