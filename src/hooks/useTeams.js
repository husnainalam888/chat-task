import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import * as teamController from "@/controllers/teamController";
import * as invitationController from "@/controllers/invitationController";
import toast from "react-hot-toast";

const useTeams = () => {
  const { fetchTeams, fetchMyTeams } = teamController;
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [myTeams, setMyTeams] = useState([]);
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showInvitationModal, setShowInvitationModal] = useState(false);

  useEffect(() => {
    fetchTeams({
      setLoading,
      setTeams,
      setError,
    });
    getMyTeams();
  }, []);
  const getMyTeams = async () => {
    fetchMyTeams({
      setMyTeams,
      setError,
      setLoading,
    });
  };
  const createTeam = async (data) => {
    teamController.createTeam({
      setLoading,
      setError,
      data,
      onSuccess: (team) => {
        toast.success("Team created successfully");
        setShowCreateTeamModal(false);
        getMyTeams();
      },
    });
  };

  const deleteTeam = async (teamId) => {
    teamController.deleteTeam({
      setLoading,
      setError,
      teamId,
      onSuccess: () => {
        toast.success("Team deleted successfully");
        getMyTeams();
      },
    });
  };

  const updateTeam = async (data) => {
    teamController.updateTeam({
      setLoading,
      setError,
      data,
      onSuccess: () => {
        toast.success("Team updated successfully");
        setShowCreateTeamModal(false);
        getMyTeams();
      },
    });
  };

  const sendInvitation = async (data) => {
    invitationController.sendInvitation({
      setLoading,
      setError,
      data,
      onSuccess: () => {
        toast.success("Invitation sent successfully");
      },
    });
  };

  return {
    teams,
    loading,
    error,
    myTeams,
    showCreateTeamModal,
    setShowCreateTeamModal,
    createTeam,
    deleteTeam,
    selectedTeam,
    setSelectedTeam,
    updateTeam,
    sendInvitation,
    showInvitationModal,
    setShowInvitationModal,
  };
};

export default useTeams;
