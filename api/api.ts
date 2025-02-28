import axios from "axios";

const API_URL = "http://192.168.1.162:8000/api/";

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

export async function createPost(data: any) {
  try {
    const response = await axios.post(`${API_URL}posts/`, data);
    return response.data;
  } catch (error) {
    console.error("error creating post:", error);
    throw error;
  }
}
