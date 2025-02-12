import { createTeam } from "@/controllers/teamController";
import { Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState, useEffect } from "react";

const AddTeamModal = ({ visible, setVisible, onTeamAdded }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const onSubmit = async () => {
    const response = await createTeam({ setLoading, setError, data: formData });
    if (response) {
      setVisible(false);
      onTeamAdded();
    }
  };
  return (
    <Modal
      okButtonProps={{ disabled: !formData.name, loading }}
      onOk={onSubmit}
      open={visible}
      onCancel={() => setVisible(false)}
    >
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Add New Team</h1>
        <Input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter team name"
        />
        <TextArea
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Enter team description"
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </Modal>
  );
};

export default AddTeamModal;
