import axiosInstance from "../lib/axiosInstance";

export const AuthService = {
  login: async (data) => {
    try {
      const response = await axiosInstance.post("/auth/login", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error(error?.response.data?.message || "Login failed");
      console.log("Error logging in:", error);
    }
  },

  signup: async (data) => {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  },
};
