import { Table, Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import {
  LucideMessageCircleMore,
  LucideUserPlus2,
  MessageCircleIcon,
  UserPlus,
  UserPlus2Icon,
  UserRoundPlusIcon,
} from "lucide-react";

const UserTable = ({ data, loading, error, onChatClick, onInviteClick }) => {
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
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
      title: "Action",
      key: "action",
      align: "center",
      render: (text, record) => (
        <div className="flex gap-2 justify-center ">
          <LucideMessageCircleMore
            className="cursor-pointer text-gray-700"
            onClick={() => onChatClick(record)}
          />
          <LucideUserPlus2
            className="cursor-pointer  text-gray-700"
            onClick={() => onInviteClick(record)}
          />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      rowKey="id"
      bordered
      pagination={{ pageSize: 10 }}
    />
  );
};

export default UserTable;
