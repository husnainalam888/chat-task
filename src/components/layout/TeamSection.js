"use client";
import React from "react";

import TeamsList from "../team/TeamsTable";
import useTeams from "@/hooks/useTeams";
import { PlusIcon } from "lucide-react";
import CreateTeamModal from "../modal/CreateTeamModal";
import InviteUserModal from "../modal/InviteUserModal";
import useInvitation from "@/hooks/useInvitation";

const TeamSection = () => {
  const {
    myTeams,
    loading,
    error,
    setShowCreateTeamModal,
    showCreateTeamModal,
    createTeam,
    deleteTeam,
    selectedTeam,
    setSelectedTeam,
    updateTeam,
    sendInvitation,
    setShowInvitationModal,
    showInvitationModal,
  } = useTeams();

  const onEdit = (team) => {
    setShowCreateTeamModal(true);
    setSelectedTeam(team);
  };
  const onCloseModal = () => {
    setShowCreateTeamModal(false);
    setSelectedTeam(null);
  };

  const onInviteClick = (team) => {
    setSelectedTeam(team);
    setShowInvitationModal(true);
  };
  const onCloseInvitationModal = () => {
    setShowInvitationModal(false);
    setSelectedTeam(null);
  };
  return (
    <div className="flex-1 bg-gray-100 p-2 flex gap-2">
      <TeamsList
        data={myTeams}
        deleteTeam={deleteTeam}
        onEdit={onEdit}
        onInviteClick={onInviteClick}
      />
      <CreateTeamModal
        visible={showCreateTeamModal}
        onClose={onCloseModal}
        handleCreate={createTeam}
        initialData={selectedTeam}
        handleUpdate={updateTeam}
      />
      <PlusIcon
        size={60}
        onClick={() => setShowCreateTeamModal(true)}
        className="cursor-pointer hover:shadow-xl absolute bottom-5 right-5 text-white p-2 bg-gray-950 rounded-full p-4"
      />
      <InviteUserModal
        handleInvite={sendInvitation}
        initialData={selectedTeam}
        visible={showInvitationModal}
        onClose={onCloseInvitationModal}
      />
    </div>
  );
};

export default TeamSection;
