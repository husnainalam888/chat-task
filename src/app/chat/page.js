import ChatSection from "../../layout/ChatSection";
import SidebarLayout from "../../layout/SidebarLayout";
import React from "react";

const page = () => {
  return (
    <SidebarLayout activeTab="chat" title="Chat">
      <ChatSection />
    </SidebarLayout>
  );
};

export default page;
