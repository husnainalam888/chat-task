import { useEffect, useState } from "react";
import { Modal, Select, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import useTeams from "@/hooks/useTeams";
import useUsers from "@/hooks/useUsers";
import toast from "react-hot-toast";

const InviteUserModal = ({
  visible,
  onClose,
  handleInvite,
  submitting,
  initialData,
}) => {
  const { teams, loading: teamsLoading } = useTeams();
  const { users, loading: usersLoading } = useUsers();
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    if (initialData) {
      setSelectedTeam(initialData);
    }
  }, [initialData]);

  const onCancel = () => {
    onClose();
    setSelectedTeam(null);
    setSelectedUser(null);
  };
  return (
    <Modal
      title="Invite User to Team"
      open={visible}
      onCancel={onCancel}
      onClose={onClose}
      footer={null}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-md font-bold">Select Team</h1>
          <Select
            placeholder="Select Team"
            loading={teamsLoading}
            className="w-full"
            value={selectedTeam}
            onChange={setSelectedTeam}
            disabled={initialData ? true : false}
            options={teams.map((team) => ({
              label: team.name,
              value: team.id,
            }))}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md font-bold">Select User</h1>
          <Select
            placeholder="Select User"
            loading={usersLoading}
            className="w-full"
            value={selectedUser}
            onChange={setSelectedUser}
            options={users.map((user) => ({
              label: `${user.name} - ${user.email}`,
              value: user.id,
            }))}
          />
        </div>

        <Button
          type="primary"
          icon={<SendOutlined />}
          loading={submitting}
          onClick={() =>
            handleInvite({ teamId: selectedTeam, receiverId: selectedUser })
          }
          className="w-full bg-gray-800"
        >
          Send Invitation
        </Button>
      </div>
    </Modal>
  );
};

export default InviteUserModal;
