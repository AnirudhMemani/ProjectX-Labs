import axios from "axios";

export const getAllBlogs = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_URL}${
        import.meta.env.VITE_BLOGS_GET_ALL_ENDPOINT
      }`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return false;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
};

export const getBlogsById = async (id: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_URL}blogs/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return undefined;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400 || error.response?.status === 404) {
        return undefined;
      } else {
        throw error;
      }
    } else {
      throw error;
    }
  }
};
