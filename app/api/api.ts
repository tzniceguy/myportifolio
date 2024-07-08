import axios from "axios";

const API_URL = "http://localhost:8000/api/";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("error fetching items:", error);
    throw error;
  }
};
