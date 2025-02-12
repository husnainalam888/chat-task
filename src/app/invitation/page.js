import InvitationSection from "@/components/layout/InvitationSection";
import SidebarLayout from "@/components/layout/SidebarLayout";
import React from "react";

const page = () => {
  return (
    <SidebarLayout activeTab="invitation" title="Invitation">
      <InvitationSection />
    </SidebarLayout>
  );
};

export default page;
