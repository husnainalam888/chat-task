import axiosInstance from "@/lib/axiosInstance";
import toast from "react-hot-toast";

export const fetchTasks = async () => {
  try {
    const response = await axiosInstance.get("/tasks");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTask = async ({ data }) => {
  try {
    const response = await axiosInstance.post("/tasks", data);
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Failed to create task");
    throw error;
  }
};

export const updateTask = async ({ data }) => {
  try {
    const response = await axiosInstance.put(`/tasks/${data.id}`, {
      ...data,
      id: undefined,
    });
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Failed to update task");
    throw error;
  }
};

export const deleteTask = async ({ taskId }) => {
  try {
    const response = await axiosInstance.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Failed to delete task");
    throw error;
  }
};

export const fetchMyTasks = async () => {
  try {
    const response = await axiosInstance.get("/tasks/created");
    return response.data;
  } catch (error) {
    throw error;
  }
};
