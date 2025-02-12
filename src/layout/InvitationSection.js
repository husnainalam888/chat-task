"use client";
import React from "react";
import SidebarLayout from "./SidebarLayout";
import InvitationsList from "../components/invitation/invitationsList";
import useInvitation from "@/hooks/useInvitation";
import { PlusCircleIcon, PlusIcon } from "lucide-react";
import InviteUserModal from "../components/modal/InviteUserModal";

const InvitationSection = () => {
  const {
    invitations,
    loading,
    error,
    onAccept,
    onDecline,
    showInvitationModal,
    setShowInvitationModal,
    sendInvitation,
  } = useInvitation();
  return (
    <div className="flex-1 bg-gray-100 p-2 flex gap-2">
      <InvitationsList
        data={invitations?.sentInvitations}
        title="Sent Invitations"
        type="sent"
      />
      <InvitationsList
        data={invitations?.receivedInvitations}
        title="Received Invitations"
        onAccept={onAccept}
        onDecline={onDecline}
      />
      <PlusIcon
        size={60}
        onClick={() => setShowInvitationModal(true)}
        className="cursor-pointer hover:shadow-xl absolute bottom-5 right-5 text-white p-2 bg-gray-950 rounded-full p-4"
      />
      <InviteUserModal
        visible={showInvitationModal}
        onClose={() => setShowInvitationModal(false)}
        submitting={loading}
        handleInvite={sendInvitation}
      />
    </div>
  );
};

export default InvitationSection;
