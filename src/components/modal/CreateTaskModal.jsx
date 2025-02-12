import { useEffect, useState } from "react";
import { Modal, Select, Input, Button } from "antd";
import useTeams from "@/hooks/useTeams";
import useUsers from "@/hooks/useUsers";
import { TASK_PRIORITY, TASK_STATUS } from "@/utils/constants/constants";
import toast from "react-hot-toast";

const { TextArea } = Input;

const CreateTaskModal = ({ visible, onClose, handleCreate, initialData }) => {
  const { teams, loading: teamsLoading } = useTeams();

  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [taskDescription, setTaskDescription] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState(null);
  const [loading, setLoading] = useState(false);
  const [taskStatus, setTaskStatus] = useState(null);

  useEffect(() => {
    if (initialData) {
      setSelectedTeam(initialData.assignedToTeamId);
      setSelectedUser(initialData.assignedToUserId);
      setTaskDescription(initialData.description);
      setTaskTitle(initialData.title);
      setPriority(initialData.priority);
      setTaskStatus(initialData.status);
    }
  }, [initialData]);

  const onCancel = () => {
    onClose();
    if (!initialData) {
      setSelectedTeam(null);
      setSelectedUser(null);
      setTaskDescription("");
      setTaskTitle("");
      setPriority(null);
      setTaskStatus(null);
    }
  };
  return (
    <Modal
      title="Create New Task"
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Enter task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="w-full"
        />
        <Select
          placeholder="Select Priority"
          value={priority}
          onChange={setPriority}
          options={TASK_PRIORITY}
          className="w-full"
        />
        <Select
          placeholder="Select Status"
          value={taskStatus}
          onChange={setTaskStatus}
          options={TASK_STATUS}
          className="w-full"
        />
        <TextArea
          placeholder="Enter task description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="w-full"
          rows={4}
        />
        {/* Team Selection */}
        <Select
          placeholder="Select Team"
          loading={teamsLoading}
          value={selectedTeam}
          onChange={setSelectedTeam}
          options={teams.map((team) => ({ label: team.name, value: team.id }))}
          className="w-full"
        />

        {/* User Selection */}
        {selectedTeam && (
          <Select
            placeholder="Select User"
            value={selectedUser}
            onChange={setSelectedUser}
            options={teams
              .find((team) => team.id === selectedTeam)
              ?.members?.map((user) => ({
                label: user.name,
                value: user.id,
              }))}
            className="w-full"
          />
        )}

        {/* Task Description */}

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={onClose} className="bg-gray-200">
            Cancel
          </Button>
          <Button
            type="primary"
            loading={loading}
            onClick={() =>
              handleCreate({
                id: initialData?.id,
                teamId: selectedTeam,
                assignedToUserId: selectedUser,
                title: taskTitle,
                description: taskDescription,
                priority: priority,
                status: taskStatus,
              })
            }
            disabled={!selectedTeam || !selectedUser || !taskDescription.trim()}
          >
            {initialData ? "Update Task" : "Create Task"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateTaskModal;
