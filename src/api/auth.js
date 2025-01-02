import axiosInstance from "../utils/axiosConfig";

const authApi = {
  login: async (credentials) => {
    try {
      const response = await axiosInstance.post("/users/login", credentials);
      return response; // Return the response data (e.g., token, user info)
    } catch (error) {
      throw error.response?.data?.message || "Login failed"; // Provide a clear error message
    }
  },
};

export default authApi;
