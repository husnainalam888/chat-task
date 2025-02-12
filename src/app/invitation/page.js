import InvitationSection from "../../layout/InvitationSection";
import SidebarLayout from "../../layout/SidebarLayout";
import React from "react";

const page = () => {
  return (
    <SidebarLayout activeTab="invitation" title="Invitation">
      <InvitationSection />
    </SidebarLayout>
  );
};

export default page;
