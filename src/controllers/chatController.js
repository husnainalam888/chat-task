import {
  fetchMessages,
  sendMessage,
  fetchConversations,
} from "../services/chatService";

export const loadChatMessages = async (userId, setMessages, setLoading) => {
  setLoading(true);
  try {
    const data = await fetchMessages(userId);
    setMessages(data);
  } catch (error) {
    console.error("Error loading messages:", error);
  } finally {
    setLoading(false);
  }
};

export const handleSendMessage = async (userId, text, setMessages) => {
  if (!text.trim()) return;
  try {
    const newMessage = await sendMessage(userId, text);
    setMessages((prev) => [...prev, newMessage]);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export const fetchChats = async ({
  setLoading,
  setConversations,
  setError,
}) => {
  setLoading(true);
  try {
    setLoading(true);
    const res = await fetchConversations();
    console.log(res);
    setLoading(false);
    setConversations(res.data);
  } catch (error) {
    console.error("Error loading messages:", error);
    setError("Failed to fetch conversations");
  } finally {
    setLoading(false);
  }
};
