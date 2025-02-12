"use client";
import {
  ChevronRight,
  LucideLogOut,
  MailCheck,
  MessageCircleIcon,
  TimerIcon,
  User2Icon,
  Users2,
} from "lucide-react";

const Sidebar = ({ activeTab, isOpen, setIsOpen }) => {
  const menuItems = [
    { name: "Users", key: "users", icon: <User2Icon />, route: "/user" },
    { name: "Tasks", key: "tasks", icon: <TimerIcon />, route: "/task" },
    { name: "Teams", key: "teams", icon: <Users2 />, route: "/team" },
    {
      name: "Invitations",
      key: "invitation",
      icon: <MailCheck />,
      route: "/invitation",
    },
    {
      name: "Chats",
      key: "chats",
      icon: <MessageCircleIcon />,
      route: "/chat",
    },
    { name: "Logout", key: "logout", icon: <LucideLogOut />, route: "/login" },
  ];

  const handleClick = (route) => {
    if (route) {
      window.location.href = route;
    }
  };

  return (
    <div
      className={`fixed z-50 top-0 left-0 h-screen w-72 bg-gray-950 p-5 text-white transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:relative lg:block`}
    >
      <h2 className="text-lg font-bold flex justify-between">
        Dashboard
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </h2>

      <ul className="mt-5 ">
        {menuItems.map((item) => {
          let isActiveTab = item.key == activeTab;
          return (
            <li
              key={item.key}
              onClick={() => {
                if (item.key === "logout") {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }
                handleClick(item.route);
                setIsOpen(false); // Close sidebar on mobile
              }}
              className={`p-2 mb-2 hover:bg-slate-800 cursor-pointer rounded gap-1 flex ${
                isActiveTab ? "bg-white text-black hover:bg-white" : ""
              }`}
            >
              {item.icon}
              <p>{item.name}</p>
              <ChevronRight className="ml-auto" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
