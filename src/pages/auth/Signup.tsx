import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/images/auth/google.png";
import { InputText } from "primereact/inputtext";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import cookie from "js-cookie";
import { useGlobalAuthContext } from "../../context/authContext";

type FormInputs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const redirect = useNavigate();
  // const token = cookie.get("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const auth = useGlobalAuthContext();

  if (!auth) {
    return null;
  }

  const { handleGoogle } = auth;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup: SubmitHandler<FormInputs> = async (datas) => {
    const { data } = await axios.post(
      "https://subsum-server-nofz.onrender.com/auth/signup",
      {
        ...datas,
      }
    );

    cookie.set("token", data.token);
    setTimeout(() => {
      redirect("/dashboard");
    }, 2000);
  };

  //  if (token) {
  //    return redirect("/dashboard");
  //  }

  return (
    <main className=" mt-6 mr-10">
      <section className=" flex justify-between items-center">
        <Link
          to={""}
          className=" text-[#4169E1] text-[16px] font-semibold flex items-center gap-2"
        >
          <span>
            <IoIosArrowBack />
          </span>{" "}
          Home
        </Link>

        <Link
          className=" text-white bg-[#4169E1] w-32 h-12 flex items-center justify-center text-[16px] font-semibold rounded-xl hover:bg-gray-600 duration-300"
          to={"/login"}
        >
          Login
        </Link>
      </section>

      <section className=" text-center mt-10">
        <p className=" text-[#4C689E] font-medium text-xl">Sign Up</p>

        <button
          className=" mt-5 flex justify-center items-center gap-7 bg-white  w-[400px] py-3 rounded-xl font-semibold text-[#1D1C2B] mx-auto shadow-xl shadow-[#D7E1F4]"
          onClick={handleGoogle}
        >
          <span>
            <img src={google} alt="" />
          </span>
          Login with Google
        </button>

        <div className=" mt-6 flex items-center justify-center gap-4">
          <div className=" h-[0.5px] w-32 bg-[#A9BADA]"></div>
          <p className=" text-xs text-[#1B2437]"> Or continue with</p>
          <div className=" h-[0.5px] w-32 bg-[#A9BADA]"></div>
        </div>

        <div className=" mt-4 bg-white shadow-xl shadow-[#D7E1F4] w-fit p-8 rounded-xl mx-auto">
          <form
            className="w-[400px] mx-auto space-y-3"
            onSubmit={handleSubmit(handleSignup)}
          >
            <div className="w-full text-start space-y-1">
              <label htmlFor="last-name" className="text-[15px] text-[#6882B6]">
                Last Name
              </label>
              <InputText
                id="last-name"
                type="text"
                className="border border-[#D7E1F4] w-full py-2 px-2 outline-none rounded-lg text-[#2B3B5A]"
                placeholder="Enter your last name"
                {...register("lastName", { required: true })}
              />

              {errors.lastName && (
                <p className=" text-[10px]">Please enter your last name</p>
              )}
            </div>

            <div className="w-full text-start space-y-1">
              <label
                htmlFor="first-name"
                className="text-[15px] text-[#6882B6]"
              >
                First Name
              </label>
              <InputText
                id="first-name"
                type="text"
                className="border border-[#D7E1F4] w-full py-2 px-2 outline-none rounded-lg text-[#2B3B5A]"
                placeholder="Enter your first name"
                {...register("firstName", { required: true })}
              />

              {errors.firstName && (
                <p className=" text-[10px]">Please enter your first name</p>
              )}
            </div>

            <div className="w-full text-start space-y-1">
              <label htmlFor="email" className="text-[15px] text-[#6882B6]">
                Email Address
              </label>
              <InputText
                id="email"
                type="email"
                className="border border-[#D7E1F4] w-full py-2 px-2 outline-none rounded-lg text-[#2B3B5A]"
                placeholder="wabdotmail@gmail.com"
                {...register("email", { required: true })}
              />

              {errors.email && (
                <p className=" text-[10px]">Please enter your email address</p>
              )}
            </div>

            <div className="w-full text-start space-y-1 relative">
              <label htmlFor="password" className="text-[15px] text-[#6882B6]">
                Password
              </label>
              <InputText
                id="password"
                type={!showPassword ? "password" : "text"}
                className="border border-[#D7E1F4] w-full py-2 px-2 pr-8 outline-none rounded-lg text-[#2B3B5A]"
                placeholder="Gabon4351"
                {...register("password", { required: true })}
              />

              <div className=" absolute top-9 right-3 text-[#4169E1]">
                {showPassword ? (
                  <button onClick={handleShowPassword} type="button">
                    <FiEyeOff />
                  </button>
                ) : (
                  <button onClick={handleShowPassword} type="button">
                    <FiEye />
                  </button>
                )}
              </div>

              {errors.email && (
                <p className=" text-[10px]">Please enter your password</p>
              )}
            </div>

            <div>
              <button className="bg-[#4169E1] w-full h-12 mt-4 text-white rounded-lg font-semibold">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
