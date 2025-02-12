import SidebarLayout from "../../layout/SidebarLayout";
import TaskSection from "../../layout/TaskSection";
import React from "react";

const page = () => {
  return (
    <SidebarLayout activeTab="task" title="Task">
      <TaskSection />
    </SidebarLayout>
  );
};

export default page;
