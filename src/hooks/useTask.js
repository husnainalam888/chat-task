import { useState, useEffect } from "react";
import * as taskController from "../controllers/taskController";
import toast from "react-hot-toast";
const useTask = () => {
  const { fetchTasks } = taskController;
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = () => {
    fetchTasks({
      setLoading,
      setTasks,
      setError,
    });
  };

  const createTask = async (data) => {
    if (data?.id) {
      return updateTask(data);
    }
    taskController.createTask({
      setLoading,
      setError,
      data,
      onSuccess: (task) => {
        toast.success("Task created successfully");
        ring;
        setShowCreateTaskModal(false);
        getAllTasks();
      },
    });
  };

  const deleteTask = async () => {
    taskController.deleteTask({
      setLoading,
      setError,
      onSuccess: () => {
        toast.success("Task deleted successfully");
        getAllTasks();
      },
    });
  };

  const updateTask = async (data) => {
    taskController.updateTask({
      setLoading,
      setError,
      data,
      onSuccess: (task) => {
        toast.success("Task updated successfully");
        setShowCreateTaskModal(false);
        getAllTasks();
      },
    });
  };

  return {
    tasks,
    loading,
    error,
    showCreateTaskModal,
    setShowCreateTaskModal,
    createTask,
    deleteTask,
    updateTask,
    selectedTask,
    setSelectedTask,
  };
};

export default useTask;
