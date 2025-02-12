import { AuthService } from "../services/authService";
import toast from "react-hot-toast";

export const AuthController = {
  login: async (data, router) => {
    try {
      const response = await AuthService.login(data);
      console.log("response : ", response);
      if (response?.data?.access_token) {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data));
        toast.success(JSON.stringify(response.message));
        router.push("/dashboard");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log("Error logging in:", error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  },

  signup: async (data, router) => {
    try {
      const response = await AuthService.signup(data);
      toast.success(response.message);
      router.push("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  },
};
