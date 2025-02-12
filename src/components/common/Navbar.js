import { Menu } from "lucide-react";
import React from "react";

const Navbar = ({ title, onMenuClick }) => {
  return (
    <div className="bg-white text-gray-950 p-3 flex items-center shadow-md mb-2 gap-2">
      <Menu
        onClick={onMenuClick}
        className="text-gray-950 cursor-pointer lg:hidden"
        size={24}
      />
      <h1 className="text-lg font-bold">{title}</h1>
    </div>
  );
};

export default Navbar;
