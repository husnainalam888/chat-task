import { useEffect, useState } from "react";
import { Modal, Input, Button } from "antd";

const CreateTeamModal = ({
  visible,
  onClose,
  handleCreate,
  handleUpdate,
  loading,
  initialData,
}) => {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (initialData) {
      console.log(initialData);
      setTeamName(initialData.name);
      setDescription(initialData.description);
    }
  }, [initialData]);
  return (
    <Modal
      title="Create New Team"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Enter team name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="p-2"
        />

        <Input.TextArea
          placeholder="Enter team description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2"
        />
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={onClose} className="bg-gray-200">
            Cancel
          </Button>
          <Button
            type="primary"
            loading={loading}
            onClick={() =>
              initialData
                ? handleUpdate({
                    id: initialData.id,
                    name: teamName,
                    description,
                  })
                : handleCreate({ name: teamName, description })
            }
            disabled={!teamName?.trim()}
          >
            {initialData ? "Update" : "Create"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateTeamModal;
