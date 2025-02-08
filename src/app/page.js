"use client";
import { disconnectSocket, getSocket } from "@/utils/socket";
import { initializeSocketListeners } from "@/utils/socket.event";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getSocket();
    initializeSocketListeners();

    return () => {
      disconnectSocket();
    };
  }, []);
  return <div></div>;
}
