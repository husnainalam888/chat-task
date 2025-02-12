import axiosInstance from "@/lib/axiosInstance";

export const fetchMessages = async (userId) => {
  const response = await axiosInstance.get(`/chat/messages/${userId}`);
  return response;
};

export const sendMessage = async (userId, text) => {
  const response = await axiosInstance.post(`/chat/message`, {
    receiverId: userId,
    message: text,
  });
  return response.data;
};

export const fetchConversations = async () => {
  const response = await axiosInstance.get(`/chat/conversations`);
  return response.data;
};

export const createConversation = async (receiverId) => {
  const response = await axiosInstance.post(`/chat/conversation`, {
    receiverId,
  });
  return response.data;
};
