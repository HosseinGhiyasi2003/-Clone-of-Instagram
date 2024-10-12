import React from "react";
import { useForm } from "react-hook-form";
import { RiFacebookBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Signup = () => {
  const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    username: yup.string().required("Please enter your username").min(4,  "Username must be at least 4 characters")
    .max(15,  "Username must not exceed 15 characters"),
    password: yup.string().required("Please enter your password").min(4, 'Password must be at least 4 characters').max(20,  "Username must not exceed 20 characters"),
    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const formSubmitting = (data) => {
    console.log(data);
  };

  return (
    <section className="flex min-h-full justify-center items-center">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="hidden md:block">
            <img src="./auth.png" alt="" />
          </div>
          <div className="flex flex-col">
            <div className="w-[300px] border-[1px] border-[#e6e6e6] md:mt-[50px] mt-[50px]  px-4">
              <div className="w-[200px] py-4">
                <img src="./logo.png" alt="" />
              </div>
              <p className="text-center mt-[-20px] pb-3 font-medium text-[#959595]">Sign up to see photos and videos from your friends.</p>
              <Link>
                <button className="bg-[#4cb5f7] w-full flex items-center text-white justify-center gap-2 font-medium p-3 rounded-md mb-1 hover:bg-[#368abf] duration-[.2s]"><RiFacebookBoxFill />Log in with facebook</button>
              </Link>
              <div className="flex items-center pt-3 mb-3">
                  <span className="w-full h-[1px] bg-[#e6e6e6]"></span>
                  <span className="text-[#babebd] px-2">OR</span>
                  <span className="w-full h-[1px] bg-[#e6e6e6]"></span>
                </div>
              <form
                className="flex flex-col"
                onSubmit={handleSubmit(formSubmitting)}
              >
                <input
                  className="border-[1px] border-[#e6e6e6] rounded-md p-2 text-[#b0b0b0]"
                  type="email"
                  placeholder="email"
                  {...register("email")}
                />
                {errors.message && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
                <input
                  className="border-[1px] border-[#e6e6e6] rounded-md mt-2 p-2 text-[#b0b0b0]"
                  type="text"
                  placeholder="username"
                  {...register("username")}
                />
                {errors.username && (
                  <div className="text-red-500">{errors.username.message}</div>
                )}
                <input
                  className="border-[1px] border-[#e6e6e6] rounded-md mt-2 p-2 text-[#b0b0b0]"
                  type="password"
                  placeholder="password"
                  {...register("password")}
                />
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
                <button className="bg-[#4cb5f7] hover:bg-[#368abf] rounded-md mt-2 p-3 duration-[.2s] text-white font-bold">
                  Sign up
                </button>
                <p className="text-center text-[13px] text-[#666666] font-medium pt-3 pb-9">By signing up, you agree to our Terms, Data Policy and cookies policy.</p>
              </form>
            </div>
            <div className="w-[300px] border-[1px] border-[#e6e6e6] mt-4">
              <p className="text-center text-[16px] py-4 font-semibold">
                Have an account?{" "}
                <Link
                  to={"/"}
                  className="text-[#4cb5f7] font-medium hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
