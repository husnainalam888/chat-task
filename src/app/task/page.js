import SidebarLayout from "@/components/layout/SidebarLayout";
import TaskSection from "@/components/layout/TaskSection";
import React from "react";

const page = () => {
  return (
    <SidebarLayout activeTab="task" title="Task">
      <TaskSection />
    </SidebarLayout>
  );
};

export default page;
