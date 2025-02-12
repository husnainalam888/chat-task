import toast from "react-hot-toast";
import { getUsers } from "../services/userService";

export const fetchUsers = async ({ setUsers, setLoading, setError }) => {
  setLoading(true);
  try {
    const users = await getUsers();
    console.log("fetchUsers : ", users);
    setUsers(users);
  } catch (error) {
    setError(error.message || "Failed to fetch users");
    toast.error(error?.response.data?.message || "Failed to fetch users");
  } finally {
    setLoading(false);
  }
};
