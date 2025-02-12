import UserSection from "@/layout/UserSection";
import InvitationSection from "../../layout/InvitationSection";
import SidebarLayout from "../../layout/SidebarLayout";
import TeamSection from "../../layout/TeamSection";
import React from "react";

const page = () => {
  return (
    <SidebarLayout activeTab="team" title="Team">
      <UserSection />
    </SidebarLayout>
  );
};

export default page;
