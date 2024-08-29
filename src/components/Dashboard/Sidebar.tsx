import logo from "../../assets/images/logo.png";
import { MdElectricBolt, MdSpaceDashboard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosCall,
  IoIosWifi,
} from "react-icons/io";
import { FiTv } from "react-icons/fi";
import { LuArrowUpLeftFromCircle, LuNewspaper } from "react-icons/lu";
import cookie from "js-cookie";

import mtn from "../../assets/images/dashboard/mtn.png";
import airtel from "../../assets/images/dashboard/airtel.png";
import ninemobile from "../../assets/images/dashboard/9mobile.png";
import { useState } from "react";
import { useGlobalAuthContext } from "../../context/authContext";

export default function Sidebar() {
  const location = useLocation();
  const [showNetwork, setShowNetwork] = useState<boolean>(false);
  const redirect = useNavigate();

  const auth = useGlobalAuthContext();

  if (!auth) {
    return null;
  }

  const handleLogout = () => {
    cookie.remove("token");

    setTimeout(() => {
      redirect("/login");
    }, 1000);
  };

  return (
    <div className="w-64 bg-[#EFF3FB] h-screen fixed top-0 left-0">
      <div className="p-4">
        <img src={logo} alt="Logo" className="h-8 w-40" />
      </div>

      <nav className="mt-6 flex justify-center flex-col gap-8">
        <Link
          to={"/dashboard"}
          className={`flex items-center mx-3 py-2 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px] ${
            location.pathname === "/dashboard" && "bg-[#4169E1] text-white"
          }`}
          onClick={() => {
            setShowNetwork(false);
          }}
        >
          <p className="mr-3">
            <MdSpaceDashboard
              size={20}
              className={` text-[#6882B6] ${
                location.pathname === "/dashboard" && " text-white"
              }`}
            />
          </p>
          Dashboard
        </Link>

        <Link
          to={"#"}
          className="flex items-center mx-3 py-2 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px]"
          onClick={() => {
            setShowNetwork(false);
          }}
        >
          <p className="mr-3">
            <IoIosCall size={20} className=" text-[#6882B6]" />
          </p>
          Buy Airtime
          <span className=" ms-7">
            <IoIosArrowDown color="#4169E1" />
          </span>
        </Link>

        <Link
          to={"#"}
          className="flex items-center mx-3 py-2 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px]"
          onClick={() => {
            setShowNetwork(false);
          }}
        >
          <p className="mr-3">
            <IoIosWifi size={20} className=" text-[#6882B6]" />
          </p>
          Buy Data
          <span className=" ms-7">
            <IoIosArrowDown color="#4169E1" />
          </span>
        </Link>

        <Link
          to={"#"}
          className="flex items-center mx-3 py-2 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px] whitespace-nowrap"
          onClick={() => {
            setShowNetwork(false);
          }}
        >
          <p className="mr-3">
            <FiTv size={20} className=" text-[#6882B6]" />
          </p>
          TV Subscription
          <span className=" ms-5">
            <IoIosArrowDown color="#4169E1" />
          </span>
        </Link>

        <Link
          to={"#"}
          className="flex items-center mx-3 py-2 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px] whitespace-nowrap"
          onClick={() => {
            setShowNetwork(false);
          }}
        >
          <p className="mr-3">
            <MdElectricBolt size={20} className=" text-[#6882B6]" />
          </p>
          Pay Electric Bill
          <span className=" ms-7">
            <IoIosArrowDown color="#4169E1" />
          </span>
        </Link>

        <div className=" space-y-3 px-4">
          <Link
            to={"/dashboard/airtime-to-cash"}
            className={`flex items-center  py-2 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px] ${
              location.pathname === "/dashboard/airtime-to-cash" &&
              "bg-[#4169E1] text-white"
            }`}
            onClick={() => {
              setShowNetwork(true);
            }}
          >
            <p className="mr-3">
              <LuArrowUpLeftFromCircle
                size={20}
                className={` text-[#6882B6] ${
                  location.pathname === "/dashboard/airtime-to-cash" &&
                  " text-white"
                }`}
              />
            </p>
            Airtime to Cash
          </Link>

          {showNetwork && (
            <div className="flex items-center gap-1 ">
              <img src={mtn} alt="mtn" className=" w-12 h-10" />
              <img src={airtel} alt="mtn" className=" w-12 h-10" />
              <img src={ninemobile} alt="mtn" className=" w-12 h-10" />

              <div className=" flex items-center gap-3 ms-2 text-[#4169E1] font-semibold">
                <p className=" text-[15px]">More</p>
                <IoIosArrowForward />
              </div>
            </div>
          )}
        </div>

        <Link
          to={"/dashboard/transaction-history"}
          className={`flex items-center mx-3 py-2 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px] ${
            location.pathname === "/dashboard/transaction-history" &&
            "bg-[#4169E1] text-white"
          }`}
          onClick={() => {
            setShowNetwork(false);
          }}
        >
          <p className="mr-3">
            <LuNewspaper
              size={20}
              className={` text-[#6882B6] ${
                location.pathname === "/dashboard/transaction-history" &&
                " text-white"
              }`}
            />
          </p>
          Transaction History
        </Link>

        <Link
          to={"/dashboard/help"}
          className={`flex items-center mx-3 py-2 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px] ${
            location.pathname === "/dashboard/help" && "bg-[#4169E1] text-white"
          }`}
          onClick={() => {
            setShowNetwork(false);
          }}
        >
          <p className="mr-3">
            <BiSupport
              size={20}
              className={` text-[#6882B6] ${
                location.pathname === "/dashboard/help" && " text-white"
              }`}
            />
          </p>
          Help & Support
        </Link>
      </nav>

      <div className="absolute bottom-0 left-0 w-full p-4">
        <button
          className="flex items-center mx-3 py-2 px-4 text-[#4C689E] rounded-md hover:bg-gray-200 font-medium text-[16px]"
          onClick={handleLogout}
        >
          <p className="mr-3">
            <MdLogout />
          </p>
          Logout
          <span className=" ms-14">
            <IoIosArrowDown color="#4169E1" />
          </span>
        </button>
      </div>
    </div>
  );
}
