import axios from "axios";

const API_URL = "http://tzniceguyblog.deploy.tz/api/";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}posts`);
    return response.data;
  } catch (error) {
    console.error("error fetching posts:", error);
    throw error;
  }
};

export async function fetchPost(slug: any) {
  const response = await axios.get(`${API_URL}posts/${slug}`);
  return response.data;
}
