import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import google from "../../assets/images/auth/google.png";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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

        <button className=" mt-5 flex justify-center items-center gap-7 bg-white  w-[400px] py-3 rounded-xl font-semibold text-[#1D1C2B] mx-auto shadow-xl shadow-[#D7E1F4]">
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
          <form className="w-[400px] mx-auto space-y-3">
            <div className="w-full text-start space-y-1">
              <label htmlFor="email" className="text-[15px] text-[#6882B6]">
                Email Address
              </label>
              <InputText
                id="email"
                type="email"
                className="border border-[#D7E1F4] w-full py-2 px-2 outline-none rounded-lg text-[#2B3B5A]"
                placeholder="wabdotmail@gmail.com"
              />
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
              />

              <div className=" absolute bottom-2 right-3 text-[#4169E1]">
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
            </div>

            <div className=" flex justify-between items-center">
              <div className="flex items-center gap-2">
                <InputSwitch
                  checked={checked}
                  onChange={(e) => setChecked(e.value)}
                />

                <label
                  htmlFor="password"
                  className="text-[15px] text-[#6882B6]"
                >
                  Password
                </label>
              </div>

              <Link to={""} className=" text-sm text-[#EE5D50]">
                Recover Password
              </Link>
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
