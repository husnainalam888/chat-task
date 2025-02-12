"use client";
import { useEffect, useState } from "react";
import Table from "../../components/user/Table";
import { fetchUsers } from "@/controllers/userController";
import Sidebar from "@/components/common/Sidebar";
import ChatModal from "@/components/chat/ChatModal";
import ChatsTable from "@/components/chat/ChatTable";
import { fetchChats } from "@/controllers/chatController";
import TeamsTable from "@/components/team/TeamsTable";
import { fetchTeams } from "@/controllers/teamController";
import { Truculenta } from "next/font/google";
import { Button, Menu } from "antd";
import { MenuIcon, PlusIcon } from "lucide-react";
import AddTeamModal from "@/components/team/AddTeamModal";
import ChatSection from "../../layout/ChatSection";
import { getSocket } from "@/utils/socket";
import { initializeSocketListeners } from "@/utils/socket.event";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [teams, setTeams] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [showAddTeamModal, setShowAddTeamModal] = useState(false);

  useEffect(() => {
    if (activeTab === "users") {
      fetchUsers(setUsers, setLoading, setError);
    } else if (activeTab === "chats") {
      fetchChats({ setConversations, setLoading, setError });
    } else if (activeTab === "teams") {
      fetchTeams({ setTeams, setLoading, setError });
    }
  }, [activeTab]);

  useEffect(() => {
    getSocket();
    initializeSocketListeners();
  }, []);

  const handleChatClick = (user) => {
    setSelectedUser(user);
    setIsChatOpen(true);
  };

  const handleMessageClick = (conversation) => {
    console.log(conversation);
    setSelectedConversation(conversation);
    setIsChatOpen(true);
  };

  const handleAddNew = () => {
    if (activeTab === "teams") setShowAddTeamModal(true);
  };
  return (
    <div className="flex h-screen">
      <Sidebar
        setActiveTab={setActiveTab}
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        selected={activeTab}
      />
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex gap-3 items-center mb-5">
          <MenuIcon
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="cursor-pointer lg:hidden"
          />
          <h1 className="text-xl font-bold">
            {activeTab?.at(0).toUpperCase() + activeTab?.slice(1)}
          </h1>
          <Button
            onClick={handleAddNew}
            className="bg-gray-800 text-white ml-auto p-5"
          >
            {<PlusIcon size={18} />} Add New
          </Button>
        </div>
        {activeTab === "users" && (
          <Table
            data={users}
            loading={loading}
            error={error}
            onChatClick={handleChatClick}
          />
        )}
        {activeTab === "chats" && <ChatSection />}
        {activeTab == "teams" && (
          <TeamsTable data={teams} loading={loading} error={error} />
        )}
        {/* Chat Modal */}
        {selectedUser && (
          <ChatModal
            visible={isChatOpen}
            onClose={() => setIsChatOpen(false)}
            user={selectedUser}
          />
        )}
        <AddTeamModal
          visible={showAddTeamModal}
          setVisible={setShowAddTeamModal}
        />
      </div>
    </div>
  );
};

export default Dashboard;
