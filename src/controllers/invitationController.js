import axiosInstance from "@/lib/axiosInstance";
import toast from "react-hot-toast";
const TAG = "invitationController";
export const getInvitations = async ({
  setLoading,
  setError,
  setInvitations,
}) => {
  setLoading(true);
  try {
    const invitations = await axiosInstance.get("/invitations");
    console.log(TAG, "getInvitations : ", invitations);
    setInvitations(invitations.data);
    setError(null);
  } catch (error) {
    setError(error.message || "Failed to fetch users");
    toast.error(error?.response.data?.message || "Failed to fetch users");
  } finally {
    setLoading(false);
  }
};

export const sendInvitation = async ({
  setLoading,
  setError,
  data,
  onSuccess,
}) => {
  setLoading(true);
  try {
    const response = await axiosInstance.post("/invitations", data);
    setError(null);
    onSuccess(response.data);
  } catch (error) {
    setError(error.message || "Failed to fetch users");
    toast.error(error?.response.data?.message || "Failed to fetch users");
  } finally {
    setLoading(false);
  }
};

export const respondInvitation = async ({
  setLoading,
  setError,
  invitationId,
  onSuccess,
  status,
}) => {
  setLoading(true);
  try {
    const response = await axiosInstance.put(
      `/invitations/${invitationId}/respond`,
      { status }
    );
    setError(null);
    onSuccess(response.data);
  } catch (error) {
    setError(error.message || "Failed to fetch users");
    toast.error(error?.response.data?.message || "Failed to fetch users");
  } finally {
    setLoading(false);
  }
};
