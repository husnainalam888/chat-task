import toast from "react-hot-toast";
import * as teamService from "@/services/teamService";
export const fetchTeams = async ({ setTeams, setLoading, setError }) => {
  setLoading(true);
  try {
    const Teams = await teamService.fetchTeams();
    setTeams(Teams);
    setError(null);
  } catch (error) {
    setError(error.message || "Failed to fetch users");
    toast.error(error?.response.data?.message || "Failed to fetch users");
  } finally {
    setLoading(false);
  }
};

export const createTeam = async ({ setLoading, setError, data, onSuccess }) => {
  setLoading(true);
  try {
    const team = await teamService.createTeam({ data });
    setError(null);
    onSuccess(team);
    return team;
  } catch (error) {
    setError(error.message || "Failed to create team");
    toast.error(error?.response.data?.message || "Failed to create team");
  } finally {
    setLoading(false);
  }
};

export const fetchMyTeams = async ({ setMyTeams, setLoading, setError }) => {
  setLoading(true);
  try {
    const myTeams = await teamService.fetchMyTeams();
    setMyTeams(myTeams);
    setError(null);
  } catch (error) {
    setError(error.message || "Failed to fetch users");
    toast.error(error?.response.data?.message || "Failed to fetch users");
  } finally {
    setLoading(false);
  }
};

export const deleteTeam = async ({
  setLoading,
  setError,
  teamId,
  onSuccess,
}) => {
  setLoading(true);
  try {
    await teamService.deleteTeam({ teamId });
    setError(null);
    onSuccess();
  } catch (error) {
    setError(error.message || "Failed to delete team");
    toast.error(error?.response.data?.message || "Failed to delete team");
  } finally {
    setLoading(false);
  }
};

export const updateTeam = async ({ setLoading, setError, data, onSuccess }) => {
  setLoading(true);
  try {
    await teamService.updateTeam({ data });
    setError(null);
    onSuccess();
  } catch (error) {
    setError(error.message || "Failed to update team");
    toast.error(error?.response.data?.message || "Failed to update team");
  } finally {
    setLoading(false);
  }
};
