import { VscBell } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import cookie from "js-cookie";
import { useMemo } from "react";

interface DecodedToken {
  firstName: string;
  lastName: string;
  // Add other properties from your JWT token here
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = cookie.get("token");

  const decodedToken = useMemo(() => {
    if (token) {
      try {
        return jwtDecode(token) as DecodedToken;
      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    }
    return null;
  }, [token]);

  console.log(decodedToken);

  const titles: { [key: string]: string } = useMemo(
    () => ({
      "/dashboard": `Welcome, ${decodedToken?.firstName || "User"} ${
        decodedToken?.lastName || "User"
      }`,
      "/dashboard/help": "Help And Support",
      "/dashboard/airtime-to-cash": "Airtime to Cash",
      "/dashboard/transaction-history": "Transaction History",
    }),
    [decodedToken]
  );

  const currentTitle = titles[location.pathname] || "";

  return (
    <header className="flex items-center ml-64 pr-80 justify-between bg-white p-4 fixed mx-auto w-full">
      <h1 className="text-lg font-semibold text-[#2B3B5A] capitalize">
        {currentTitle}
      </h1>

      <div className="flex items-center space-x-5">
        <button className="text-[#4169E1] font-semibold text-[16px]">
          Upgrade To Merchant
        </button>
        <span className="bg-[#EFF3FB] border-2 border-[#F7F9FD] h-10 w-10 rounded-full flex justify-center items-center relative">
          <VscBell size={20} color="#4169E1" />
        </span>

        <div>
          <button
            className="bg-[#EFF3FB] border-2 border-[#F7F9FD] h-10 w-10 rounded-full flex justify-center items-center"
            onClick={() => navigate("/dashboard/profile")}
          >
            <FaRegUser size={20} color="#4169E1" />
          </button>
        </div>
      </div>
    </header>
  );
}
