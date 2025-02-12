import toast from "react-hot-toast";
import * as taskService from "@/services/taskService";
export const fetchTasks = async ({ setLoading, setTasks, setError }) => {
  setLoading(true);
  try {
    const tasks = await taskService.fetchTasks();
    setTasks(tasks);
    setError(null);
  } catch (error) {
    setError(error.message || "Failed to fetch tasks");
    toast.error(error?.response.data?.message || "Failed to fetch tasks");
  } finally {
    setLoading(false);
  }
};

export const createTask = async ({ setLoading, setError, data, onSuccess }) => {
  setLoading(true);
  try {
    const task = await taskService.createTask({ data });
    setError(null);
    onSuccess(task);
    return task;
  } catch (error) {
    console.error("Error creating task:", error);
    setError(error.message || "Failed to create task");
    toast.error(JSON.stringify(error) || "Failed to create task");
  } finally {
    setLoading(false);
  }
};

export const updateTask = async ({ setLoading, setError, data, onSuccess }) => {
  setLoading(true);
  try {
    const task = await taskService.updateTask({ data });
    setError(null);
    onSuccess(task);
    return task;
  } catch (error) {
    setError(error.message || "Failed to update task");
    toast.error(error?.response.data?.message || "Failed to update task");
  } finally {
    setLoading(false);
  }
};

export const deleteTask = async ({
  setLoading,
  setError,
  taskId,
  onSuccess,
}) => {
  setLoading(true);
  try {
    await taskService.deleteTask({ taskId });
    setError(null);
    onSuccess();
  } catch (error) {
    setError(error.message || "Failed to delete task");
    toast.error(error?.response.data?.message || "Failed to delete task");
  } finally {
    setLoading(false);
  }
};
