"use client";
import React, { useEffect, useState } from "react";
import ChatList from "../components/chat/ChatList";
import { fetchChats } from "@/controllers/chatController";
import MessageSection from "../components/chat/MessageSection";
import useStore from "@/lib/store";

const ChatSection = () => {
  const { setMessages, messages } = useStore();
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetchChats({
      setConversations,
      setLoading,
      setError,
    });
  };
  const setConversations = (data) => {
    setChats(data);
    data.forEach((element) => {
      setMessages(element.id, element.messages);
    });
  };
  const handleChatSelect = (item) => {
    setSelectedChat(item);
  };
  return (
    <div className="flex bg-gray-50 flex-1  max-h-full w-full">
      <ChatList data={chats} onSelect={handleChatSelect} />
      {selectedChat && <MessageSection item={selectedChat} />}
    </div>
  );
};

export default ChatSection;
