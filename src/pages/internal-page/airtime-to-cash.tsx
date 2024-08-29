import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

import mtn from "../../assets/images/dashboard/mtn.png";
import airtel from "../../assets/images/dashboard/airtel.png";
import ninemobile from "../../assets/images/dashboard/9mobile.png";
import glo from "../../assets/images/dashboard/glo.webp";
import { IoIosArrowDown } from "react-icons/io";

interface NetworkOption {
  value: string;
  label: string;
  image: string;
}

const AirtimeToCash = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkOption | null>(
    null
  );

  const networkOptions: NetworkOption[] = [
    {
      value: "etisalat",
      label: "Etisalat",
      image: ninemobile,
    },
    { value: "glo", label: "Glo", image: glo },
    { value: "airtel", label: "Airtel", image: airtel },
    { value: "mtn", label: "MTN", image: mtn },
  ];

  const handleSelect = (option: NetworkOption) => {
    setSelectedNetwork(option);
    setIsOpen(false);
  };

  return (
    <main className="text-center">
      <section className=" flex justify-center gap-4 items-center">
        <div>
          <p className=" text-[14px] text-[#4169E1] font-semibold">Fill Info</p>

          <div className=" bg-[#4169E1] h-1 w-32 rounded-full mt-2" />
        </div>

        <div>
          <p className=" text-[14px] text-[#D7E1F4] font-semibold">
            Make Payment
          </p>

          <div className=" bg-[#D7E1F4] h-1 w-32 rounded-full mt-2" />
        </div>

        <div>
          <p className=" text-[14px] text-[#D7E1F4] font-semibold">
            View Receipt
          </p>

          <div className=" bg-[#D7E1F4] h-1 w-32 rounded-full mt-2" />
        </div>
      </section>
      <section className="border mt-10 p-5 rounded-xl w-[500px] mx-auto bg-[#F7F9FD]">
        <h2 className=" mb-7 font-semibold text-[#6882B6] text-lg">
          Airtime to Cash
        </h2>
        <form className="space-y-3">
          <div className="flex items-center justify-between w-full gap-3">
            {/* select network  */}
            <div className="w-full text-start space-y-1">
              <label
                htmlFor="network-select"
                className="text-[15px] text-[#6882B6]"
              >
                Select Network
              </label>

              <div className="relative">
                <button
                  id="network-select"
                  type="button"
                  className="w-full py-2 px-3 border rounded-lg flex items-center justify-between outline-none text-sm"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedNetwork ? (
                    <span className="flex items-center gap-2 text-sm">
                      <img
                        src={selectedNetwork.image}
                        alt={selectedNetwork.label}
                        className="w-6 h-6"
                      />
                      {selectedNetwork.label}
                    </span>
                  ) : (
                    "Select a Network"
                  )}
                  <span>
                    <IoIosArrowDown color="#0040F7" />
                  </span>
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="absolute w-full bg-white border rounded-lg mt-1 shadow-lg z-10">
                    {networkOptions.map((option) => (
                      <button
                        key={option.value}
                        className="w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-gray-100"
                        onClick={() => handleSelect(option)}
                        type="button"
                      >
                        <img
                          src={option.image}
                          alt={option.label}
                          className="w-10 h-7"
                        />
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* select network  */}

            <div className="w-full text-start space-y-1">
              <label htmlFor="" className="text-[15px] text-[#6882B6]">
                Phone Number
              </label>
              <InputText
                type="tel"
                className="border w-full py-2 px-2 outline-none rounded-lg"
              />
            </div>
          </div>

          <div className="w-full text-start space-y-1">
            <label htmlFor="" className="text-[15px] text-[#6882B6]">
              Amount
            </label>
            <InputText
              type="number"
              className="border w-full py-2 px-2 outline-none rounded-lg"
            />
          </div>

          <div className="w-full text-start space-y-1">
            <label htmlFor="" className="text-[15px] text-[#6882B6]">
              Airtime Share Pin
            </label>
            <InputText
              type="tel"
              className="border w-full py-2 px-2 outline-none rounded-lg"
            />
          </div>

          <div>
            <button className="bg-[#4169E1] w-full h-12 text-white font-semibold text-[16px] rounded-lg mt-10">
              Proceed
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AirtimeToCash;
