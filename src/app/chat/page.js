import ChatSection from "@/components/layout/ChatSection";
import SidebarLayout from "@/components/layout/SidebarLayout";
import React from "react";

const page = () => {
  return (
    <SidebarLayout activeTab="chat" title="Chat">
      <ChatSection />
    </SidebarLayout>
  );
};

export default page;
