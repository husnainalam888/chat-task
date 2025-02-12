"use client";
import { disconnectSocket, getSocket } from "@/utils/socket";
import { initializeSocketListeners } from "@/utils/socket.event";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getSocket();
    initializeSocketListeners();
    if (localStorage.getItem("token")) {
      window.location.href = "/user";
    } else {
      window.location.href = "/login";
    }

    return () => {
      disconnectSocket();
    };
  }, []);
  return <div></div>;
}
