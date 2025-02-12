import useStore from "@/lib/store";
import { getSocket } from "@/utils/socket";
import { Avatar, Button, List } from "antd";
import { Input } from "antd/lib";

import { PlaneTakeoff, Send, User2Icon } from "lucide-react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MessageSection = ({ item }) => {
  const { messages, addMessage } = useStore();
  const [message, setMessage] = useState("");
  const handleMessageSent = () => {
    if (!message) {
      toast.error("Message can't be empty");
      return;
    }
    let socket = getSocket();
    let user = JSON.parse(localStorage.getItem("user"));
    let messagePayload = {
      message,
      conversationId: item?.id,
      senderId: user?.id,
      receiverId: item?.user?.id,
      type: "TEXT",
    };
    socket.emit("sendMessage", messagePayload);
    addMessage(item?.id, { ...messagePayload, mine: true });
    setMessage("");
  };
  return (
    <div className="w-full flex flex-col h-full bg-gray-100 ml-1 rounded overflow-hidden">
      <Toaster />
      <div className="flex  w-full p-3 gap-2 items-center bg-gray-200">
        <Avatar icon={<User2Icon />} />
        <h1 className="font-bold">{item?.user?.name}</h1>
      </div>
      <List
        className="flex-1 py-5 px-2 flex-col"
        dataSource={messages[item?.id] || []}
        renderItem={(item) => {
          let mine = item?.mine;
          return (
            <div className={!mine ? `flex justify-start` : `flex justify-end`}>
              <div
                className={`py-2 px-4 text-white mb-2  bg-gray-800 inline-block whitespace-pre-wrap break-words ${
                  mine
                    ? "rounded-full rounded-tr-none rounded-tl-full"
                    : "rounded-full rounded-tl-none rounded-tr-full"
                }`}
              >
                {item?.message}
              </div>
            </div>
          );
        }}
      />
      <div className="flex gap-2 items-center p-3 justify-center">
        <input
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=" w-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded bg-white shadow-md"
          style={{ borderColor: "black !important" }}
        />
        <div
          onClick={handleMessageSent}
          className="p-3 cursor-pointer bg-gray-700 rounded-full"
        >
          <Send className="text-white" size={16} />
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
