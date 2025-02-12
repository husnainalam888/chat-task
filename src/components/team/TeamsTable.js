import { Table, Button, Typography } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const TeamsTable = ({
  data = [],
  loading,
  error,
  createInvite,
  deleteTeam,
  onEdit,
  onInviteClick,
}) => {
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  const columns = [
    {
      title: "Team Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div className="flex items-center gap-2 min-w-max">
          <Text className="font-bold" strong>
            {text}
          </Text>
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => (
        <Text type="secondary">{text || "No description"}</Text>
      ),
    },
    {
      title: "Members",
      dataIndex: "members",
      key: "members",
      render: (members) =>
        members.length > 0 ? (
          members.map((member) => (
            <Text key={member.id} className="mr-2 text-gray-700">
              {member.name}
            </Text>
          ))
        ) : (
          <Text type="secondary">No members</Text>
        ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            onClick={() => onInviteClick(record.id)}
          >
            Invite
          </Button>
          <Button icon={<EditOutlined />} onClick={() => onEdit(record)}>
            Edit
          </Button>
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => {
              deleteTeam(record.id);
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      className="flex-1 shadow-lg rounded-lg"
      dataSource={data.map((team) => ({ ...team, key: team.id }))}
      loading={loading}
      bordered
      pagination={{ pageSize: 5 }}
    />
  );
};

export default TeamsTable;
