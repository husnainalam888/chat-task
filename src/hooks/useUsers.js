import { useEffect, useState } from "react";
import { fetchUsers } from "@/controllers/userController";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers({
      setLoading,
      setUsers,
      setError,
    });
  }, []);

  return { users, loading };
};

export default useUsers;
