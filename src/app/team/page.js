import InvitationSection from "@/components/layout/InvitationSection";
import SidebarLayout from "@/components/layout/SidebarLayout";
import TeamSection from "@/components/layout/TeamSection";
import React from "react";

const page = () => {
  return (
    <SidebarLayout activeTab="team" title="Team">
      <TeamSection />
    </SidebarLayout>
  );
};

export default page;
