import { useEffect, useState } from "react";
import { getInvitations } from "../controllers/invitationController";
import toast from "react-hot-toast";
import * as inviationController from "../controllers/invitationController";

const useInvitation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [invitations, setInvitations] = useState({
    sentInvitations: [],
    receivedInvitations: [],
  });
  const [showInvitationModal, setShowInvitationModal] = useState(false);
  useEffect(() => {
    fetchInvitations();
  }, []);

  const fetchInvitations = () => {
    getInvitations({
      setLoading,
      setError,
      setInvitations,
    });
  };

  const onAccept = (invitation) => {
    inviationController.respondInvitation({
      setLoading,
      setError,
      invitationId: invitation.id,
      onSuccess: (response) => {
        console.log(response);
        toast.success("Invitation accepted successfully");
        fetchInvitations();
      },
      status: "ACCEPTED",
    });
  };

  const onDecline = (invitation) => {
    inviationController.respondInvitation({
      setLoading,
      setError,
      invitationId: invitation.id,
      onSuccess: (response) => {
        console.log(response);
        toast.success("Invitation declined successfully");
        fetchInvitations();
      },
      status: "DECLINED",
    });
  };

  const sendInvitation = (data) => {
    console.log(data);
    inviationController.sendInvitation({
      setLoading,
      setError,
      data,
      onSuccess: (response) => {
        console.log(response);
        toast.success("Invitation sent successfully");
        setShowInvitationModal(false);
        fetchInvitations();
      },
    });
  };

  return {
    loading,
    error,
    invitations,
    onAccept,
    onDecline,
    showInvitationModal,
    setShowInvitationModal,
    sendInvitation,
  };
};

export default useInvitation;
