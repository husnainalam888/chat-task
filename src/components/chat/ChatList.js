import { Avatar, List } from "antd";
import Item from "antd/es/list/Item";
import { User, User2Icon } from "lucide-react";
import React from "react";

const ChatList = ({ data, onSelect }) => {
  return (
    <List
      className="min-w-max bg-gray-200 rounded "
      dataSource={data}
      renderItem={(item) => {
        return (
          <>
            <div
              onClick={() => onSelect(item)}
              className="flex gap-3 items-center py-2 px-4 overflow-hidden hover:bg-slate-300 cursor-pointer"
            >
              <Avatar icon={<User2Icon />} />
              <div className="flex flex-col flex-1">
                <h1 className="font-bold">{item?.user?.name}</h1>
                <p>{item?.lastMessage || item?.user?.email}</p>
              </div>
              <p>{item?.updatedAt}</p>
            </div>
            <div style={{ height: 1 }} className=" bg-gray-300" />
          </>
        );
      }}
    />
  );
};

export default ChatList;
