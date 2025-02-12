import { useState, useEffect } from "react";
import { Modal, List, Spin, Button } from "antd";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { fetchMessages, sendMessage } from "../../services/chatService";

const ChatModal = ({ visible, onClose, user }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (visible) {
      loadMessages();
    }
  }, [visible]);

  const loadMessages = async () => {
    setLoading(true);
    try {
      const data = await fetchMessages(user.id);
      setMessages(data);
    } catch (error) {
      console.error("Error loading messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;
    try {
      const newMessage = await sendMessage(user.id, text);
      setMessages((prev) => [...prev, newMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <Modal
      title={`Chat with ${user.name}`}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={500}
    >
      <div style={{ maxHeight: 400, overflowY: "auto" }}>
        {loading ? (
          <Spin size="large" />
        ) : (
          <List
            dataSource={messages}
            renderItem={(message) => <ChatMessage message={message} />}
          />
        )}
      </div>
      <ChatInput onSend={handleSendMessage} />
    </Modal>
  );
};

export default ChatModal;
