import axiosInstance from "@/lib/axiosInstance";

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get(`/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
