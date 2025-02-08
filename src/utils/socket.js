import { io } from "socket.io-client";

let socket = null;

export const getSocket = () => {
  if (!socket) {
    socket = io("localhost:5000", {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 3000, // Retry every 3s
      timeout: 10000, // 10s timeout
      autoConnect: false, // Connect manually
    });

    socket.on("connect", () => {
      console.log(`✅ Connected to Socket.IO Server: ${socket.id}`);
    });

    socket.on("disconnect", (reason) => {
      console.warn(`❌ Disconnected: ${reason}`);
    });

    socket.on("connect_error", (error) => {
      console.error("❌ Connection Error:", error.message);
    });

    socket.connect();
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
