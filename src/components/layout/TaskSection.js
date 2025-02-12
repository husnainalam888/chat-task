"use client";
import useTask from "@/hooks/useTask";
import { PlusIcon } from "lucide-react";
import React from "react";
import CreateTaskModal from "../modal/CreateTaskModal";
import TaskList from "../task/TaskList";

const TaskSection = () => {
  const {
    tasks,
    showCreateTaskModal,
    setShowCreateTaskModal,
    createTask,
    selectedTask,
    setSelectedTask,
    deleteTask,
    updateTask,
  } = useTask();
  const onEdit = (task) => {
    setSelectedTask(task);
    setShowCreateTaskModal(true);
  };

  return (
    <div className="flex-1 bg-gray-100 p-2">
      <TaskList onEdit={onEdit} onDelete={deleteTask} tasks={tasks} />
      <PlusIcon
        size={60}
        onClick={() => setShowCreateTaskModal(true)}
        className="cursor-pointer hover:shadow-xl absolute bottom-5 right-5 text-white p-2 bg-gray-950 rounded-full p-4"
      />
      <CreateTaskModal
        visible={showCreateTaskModal}
        onClose={() => setShowCreateTaskModal(false)}
        handleCreate={createTask}
        initialData={selectedTask}
      />
    </div>
  );
};

export default TaskSection;
