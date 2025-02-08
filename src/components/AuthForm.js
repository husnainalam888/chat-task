"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AuthController } from "../controllers/authController";

const AuthForm = ({ type }) => {
  const isLogin = type === "login";
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: isLogin
      ? yup.string().notRequired()
      : yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Must be at least 6 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    await (isLogin
      ? AuthController.login(data, router)
      : AuthController.signup(data, router));
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Toaster />
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                className="w-full p-2 border rounded mt-1"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
          )}

          <div className="mt-3">
            <label className="block text-gray-700">Email</label>
            <input
              className="w-full p-2 border rounded mt-1"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mt-3">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded mt-1"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <a
            href={isLogin ? "/signup" : "/login"}
            className="text-blue-500 underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
