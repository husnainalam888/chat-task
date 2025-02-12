import useStore from "@/lib/store";
import { getSocket } from "./socket";

export const initializeSocketListeners = () => {
  const socket = getSocket();
  const { addMessage } = useStore.getState();

  let user = JSON.parse(localStorage.getItem("user"));
  socket.emit("connectUser", user?.id);

  socket.on("receiveMessage", (message) => {
    console.log("Message received:", message);
    addMessage(message.conversationId, message);
  });

  socket.on("messageDelivered", (message) => {
    console.log("Message Delivered:", message);
  });

  socket.on("messageRead", (message) => {
    console.log("Message Read:", message);
  });

  socket.on("typing", (user) => {
    console.log(`${user} is typing...`);
  });

  socket.on("stopTyping", (user) => {
    console.log(`${user} stopped typing`);
  });

  socket.on("disconnect", (reason) => {
    console.warn(`Socket Disconnected: ${reason}`);
  });
};
