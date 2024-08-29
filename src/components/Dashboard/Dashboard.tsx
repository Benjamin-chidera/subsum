import { FiCopy, FiEdit3 } from "react-icons/fi";
import card from "../../assets/images/dashboard/card.png";
import { RiShareForwardLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";

export default function Dashboard() {
  return (
    <main className=" grid grid-cols-2  gap-7 ">
      <section className=" space-y-6 w-full">
        <div className="flex justify-between border p-4 rounded-xl ">
          <div>
            <p className=" text-[#3C517C] text-[16px] font-[400]">
              Wallet Balance
            </p>
            <h2 className=" text-[#3C517C] font-bold text-4xl">₦3000</h2>
          </div>

          <button className=" bg-[#4169E1] w-48 h-12 text-white font-semibold text-[16px] rounded-xl">
            Fund Wallet
          </button>
        </div>

        <div className=" border p-4 rounded-xl ">
          <p className=" text-[#3C517C] text-[16px]">Referral</p>

          <p className=" text-[#3C517C] text-[16px]">
            Referral Code: <span className=" font-semibold">18/52ha089</span>
          </p>

          <div className=" text-[#4169E1] mt-5 flex items-center gap-8">
            <button className=" flex items-center gap-2 font-semibold">
              <span>
                {" "}
                <FiCopy />
              </span>{" "}
              Copy
            </button>

            <button className=" flex items-center gap-2 font-semibold">
              <span>
                {" "}
                <FiEdit3 />
              </span>{" "}
              Edit
            </button>

            <button className=" flex items-center gap-2 font-semibold">
              <span>
                {" "}
                <RiShareForwardLine />
              </span>{" "}
              Share
            </button>
          </div>
        </div>

        <div className=" border p-4 rounded-xl  flex  gap-10">
          <div>
            <p className=" text-[#3C517C] text-[16px] font-[400]">
              Total referrals made
            </p>

            <h3 className=" text-[#3C517C] text-2xl font-bold">0</h3>

            <button className=" flex items-center gap-2 font-semibold text-[#4169E1] mt-3">
              <span>
                {" "}
                <IoWalletOutline />
              </span>{" "}
              Cashout
            </button>
          </div>

          <div>
            <p className=" text-[#3C517C] text-[16px] font-[400]">
              Current wallet Bonus
            </p>
            <h2 className=" text-[#3C517C] text-2xl font-bold">₦0.00</h2>
          </div>
        </div>
      </section>

      <section className=" ">
        <img src={card} alt="" className="w-[504px] h-[284px]" />
      </section>
    </main>
  );
}
