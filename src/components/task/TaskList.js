import { Table, Tag, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const TaskList = ({ tasks = [], loading, onEdit, onDelete }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const statusColors = {
          TODO: "blue",
          IN_PROGRESS: "orange",
          DONE: "green",
        };
        return <Tag color={statusColors[status] || "gray"}>{status}</Tag>;
      },
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority) => {
        const priorityColors = {
          LOW: "green",
          MEDIUM: "gold",
          HIGH: "red",
        };
        return <Tag color={priorityColors[priority] || "gray"}>{priority}</Tag>;
      },
    },
    {
      title: "Assigned To",
      dataIndex: ["assignedTo", "name"],
      key: "assignedTo",
    },
    {
      title: "Team",
      dataIndex: ["assignedToTeam", "name"],
      key: "assignedToTeam",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => onEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => onDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      <div className="overflow-auto p-2">
        <Table
          columns={columns}
          dataSource={tasks}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default TaskList;
