"use client";
import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import { Toaster } from "react-hot-toast";

const SidebarLayout = ({ activeTab, children, title }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="h-screen w-screen flex">
      <Toaster />
      <Sidebar activeTab={activeTab} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar title={title} onMenuClick={() => setIsOpen(true)} />
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
