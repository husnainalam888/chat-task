import React from "react";
import { Table, Button } from "antd";

const ChatsTable = ({ conversations, loading, error, onMessageClick }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="primary" onClick={() => onMessageClick(record)}>
          Message
        </Button>
      ),
    },
  ];

  if (loading) return <p>Loading conversations...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Table
      columns={columns}
      dataSource={conversations?.map((i) => ({
        conversationId: i.id,
        ...i.user,
      }))}
      rowKey="id"
    />
  );
};

export default ChatsTable;
