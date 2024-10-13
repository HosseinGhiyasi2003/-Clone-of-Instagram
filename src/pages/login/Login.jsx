import React from "react";
import { useForm } from "react-hook-form";
import { RiFacebookBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import authimg from '../../assets/auth.png'
import logoimg from '../../assets/logo.png'
import playstoreimg from '../../assets/playstore.png'
import microsoftimg from '../../assets/microsoft.png'

const Login = () => {

  const schema = yup.object({
    username: yup.string().required('Please enter your username'),
    password:  yup.string().required('Please enter your password')
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });


  const formSubmitting = (data) => {
    console.log(data);
  }

  return (
    <section className="flex min-h-full justify-center items-center">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="hidden md:block">
            <img src={authimg} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="w-[300px] border-[1px] border-[#e6e6e6] md:mt-[50px] mt-[50px]  px-4">
              <div className="w-[200px] py-4">
                <img src={logoimg} alt="" />
              </div>
              <form className="flex flex-col" onSubmit={handleSubmit(formSubmitting)}>
                <input
                  className="border-[1px] border-[#e6e6e6] rounded-md p-2"
                  type="text"
                  placeholder="username"
                  {...register("username")}
                />
                {errors.username && <div className="text-red-500">{errors.username.message}</div>}
                <input
                  className="border-[1px] border-[#e6e6e6] rounded-md mt-2 p-2"
                  type="password"
                  placeholder="password"
                  {...register("password")}
                />
                {errors.password && <div className="text-red-500">{errors.password.message}</div>}
                <button className="bg-[#4cb5f7] hover:bg-[#368abf] rounded-md mt-2 p-3 duration-[.2s] text-white font-bold">
                  Log in
                </button>
                <div className="flex items-center pt-3">
                  <span className="w-full h-[1px] bg-[#e6e6e6]"></span>
                  <span className="text-[#babebd] px-2">OR</span>
                  <span className="w-full h-[1px] bg-[#e6e6e6]"></span>
                </div>
                <Link className="flex justify-center py-3 items-center text-[#3d4c77] font-medium">
                  <RiFacebookBoxFill />
                  Log in with Facebook
                </Link>
                <Link className="text-[#89bdc7] text-center pb-4 hover:underline">
                  Forgot password?
                </Link>
              </form>
            </div>
            <div className="w-[300px] border-[1px] border-[#e6e6e6] mt-4">
              <p className="text-center text-[16px] py-4">
                Don't have an account?{" "}
                <Link to={'/signup'} className="text-[#4cb5f7] font-medium hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
            <span className="text-center mt-4">Get the app.</span>
            <div className="flex gap-2 justify-center mt-4">
              <img
                src={playstoreimg}
                className="w-32 cursor-pointer"
                alt=""
              />
              <img
                src={microsoftimg}
                className="w-32 cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
