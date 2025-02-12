import axiosInstance from "@/lib/axiosInstance";

export const fetchTeams = async (userId) => {
  const response = await axiosInstance.get(`/teams/me`);
  return response.data;
};

export const createTeam = async ({ data }) => {
  const response = await axiosInstance.post(`/teams`, data);
  return response.data;
};

export const fetchMyTeams = async () => {
  const response = await axiosInstance.get(`/teams/me`);
  return response.data;
};

export const deleteTeam = async ({ teamId }) => {
  const response = await axiosInstance.delete(`/teams/${teamId}`);
  return response.data;
};

export const updateTeam = async ({ data }) => {
  const response = await axiosInstance.put(`/teams/${data.id}`, {
    name: data.name,
    description: data.description,
  });
  return response.data;
};
