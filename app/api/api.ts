import axios from "axios";
import { Post } from "../interfaces/post";

const API_URL = "http://localhost:8000/api/";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}posts`);
    return response.data;
  } catch (error) {
    console.error("error fetching posts:", error);
    throw error;
  }
};

export const fetchPostById = async (id: number): Promise<Post> => {
  try {
    const response = await axios.get(`${API_URL}post/${id}/`);
    return response.data;
  } catch (error) {
    console.error("error fetching post", error);
    throw error;
  }
};