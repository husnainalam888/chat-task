"use client";
import UserTable from "@/components/user/Table";
import useUsers from "@/hooks/useUsers";
import React from "react";

const UserSection = () => {
  const { users } = useUsers();
  return (
    <div>
      <UserTable data={users} />
    </div>
  );
};

export default UserSection;
