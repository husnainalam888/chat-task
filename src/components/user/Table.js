import { Table, Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  MessageOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const UsersList = ({ data, onChat, onInvite }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="default"
            icon={<MessageOutlined />}
            onClick={() => onChat(record)}
          >
            Chat
          </Button>
          <Button
            type="default"
            icon={<UserAddOutlined />}
            onClick={() => onInvite(record)}
          >
            Invite
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <div className="overflow-auto">
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default UsersList;
