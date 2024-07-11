import axios from "axios";
import { Post } from "../interfaces/post";

const API_URL = "http://localhost:8000/api/";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("error fetching posts:", error);
    throw error;
  }
};

export const fetchPostById = async (id: number): Promise<Post> => {
  try {
    const response = await axios.get(`${API_URL}/${id}/`);
    return response.data;
  } catch (error) {
    console.error("error fetching post", error);
    throw error;
  }
};