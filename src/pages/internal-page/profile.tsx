import React, { useState, ChangeEvent, useRef } from "react";
import { CiCamera } from "react-icons/ci";
import profilePic from "../../assets/images/dashboard/profile.png";
import { FiCopy } from "react-icons/fi";
import { InputText } from "primereact/inputtext";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInputs {
  image: FileList;
}

const Profile: React.FC = () => {
  const [showChangePassword, setShowChangePassword] = useState<boolean>(false);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const handleShowChangePassword = () => {
    setShowChangePassword(!showChangePassword);
  };

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPreviewUrls = [...previewUrls];
        newPreviewUrls[index] = reader.result as string;
        setPreviewUrls(newPreviewUrls);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Handle form submission
    console.log(data);
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <main>
      <form className="flex gap-10" onSubmit={handleSubmit(onSubmit)}>
        <section className="space-y-6">
          <div className="border px-4 py-6 text-center flex flex-col justify-center rounded-2xl w-[500px]">
            {/* Selecting and previewing images */}
            <div className="flex flex-wrap gap-4">
              {[...Array(1)].map((_, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden h-24 w-24 mx-auto rounded-full bg-gray-200 mb-4"
                >
                  {previewUrls[index] && (
                    <img
                      src={previewUrls[index]}
                      alt={`Preview Image ${index + 1}`}
                      className="absolute inset-0 object-cover w-full h-full"
                    />
                  )}

                  {!previewUrls[index] && (
                    <img
                      src={profilePic}
                      alt="profile-pic"
                      className="h-24 w-24 mx-auto"
                    />
                  )}

                  <input
                    type="file"
                    id={`image${index + 1}`}
                    accept="image/*"
                    {...register("image", { required: true })}
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    onChange={(e) => handleImageChange(e, index)}
                    ref={fileInputRef}
                  />

                  {errors.image && (
                    <p className="text-xs text-center">
                      Please select an image
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button
              className="flex justify-center items-center gap-2 text-[#4169E1] font-semibold cursor-pointer"
              type="button"
              onClick={handleUploadClick}
            >
              <span>
                <CiCamera size={20} />
              </span>{" "}
              Upload Image
            </button>
          </div>

          <div className="border px-4 py-6 text-center rounded-2xl space-y-4 w-[500px]">
            <p className="flex justify-between text-[#4C689E] text-[16px]">
              Name
              <span className="text-[#4C689E] font-semibold text-[16px]">
                Lawal Wahab Babatunde
              </span>
            </p>

            <p className="flex justify-between text-[#4C689E] text-[16px]">
              Email
              <span className="text-[#4C689E] font-semibold text-[16px]">
                wabdotmail@gmail.com
              </span>
            </p>

            <p className="flex justify-between text-[#4C689E] text-[16px]">
              Phone Number
              <span className="text-[#4C689E] font-semibold text-[16px]">
                0906 856 2949
              </span>
            </p>

            <p className="flex justify-between text-[#4C689E] text-[16px]">
              Account Status
              <span className="text-[#2DAE32] font-semibold text-[16px]">
                Active
              </span>
            </p>

            <p className="flex justify-between text-[#4C689E] text-[16px]">
              Referral link
              <span className="text-[#4C689E] font-semibold text-[16px]">
                www.subsum.com/tre/wd...
              </span>
            </p>

            <div className="flex justify-end">
              <button
                className="flex items-center gap-2 font-semibold text-[#4169E1]"
                type="button"
              >
                <span>
                  <FiCopy />
                </span>{" "}
                Copy
              </button>
            </div>

            <div className="text-start">
              <button
                className="font-semibold text-[#4169E1]"
                onClick={handleShowChangePassword}
                type="button"
              >
                Edit Details
              </button>
            </div>
          </div>
        </section>

        {showChangePassword && (
          <section className="w-[50%] space-y-4">
            <div className="border p-2 rounded-full flex justify-between items-center gap-5">
              <button className="border w-full rounded-full p-2 bg-[#EFF5FB] text-[#3C517C] font-semibold text-[14px]">
                Change Password
              </button>
              <button className="border w-full rounded-full p-2 text-[14px] text-[#A9BADA] font-semibold">
                Change PIN
              </button>
            </div>

            <div className="space-y-4 border p-4 rounded-2xl">
              <div className="flex flex-col">
                <label
                  htmlFor="current-password"
                  className="text-[15px] text-[#4C689E] font-[400] mb-1"
                >
                  Current Password
                </label>

                <InputText
                  id="current-password"
                  className="border w-full h-12 rounded-md outline-none ps-2"
                  type="password"
                  placeholder="Enter Current Password"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="new-password"
                  className="text-[15px] text-[#4C689E] font-[400] mb-1"
                >
                  New Password
                </label>

                <InputText
                  id="new-password"
                  className="border w-full h-12 rounded-md outline-none ps-2"
                  type="password"
                  placeholder="Enter New Password"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="confirm-new-password"
                  className="text-[15px] text-[#4C689E] font-[400] mb-1"
                >
                  Confirm New Password
                </label>

                <InputText
                  id="confirm-new-password"
                  className="border w-full h-12 rounded-md outline-none ps-2"
                  type="password"
                  placeholder="Enter New Password"
                />
              </div>

              <button className="bg-[#4169E1] w-full h-12 font-semibold text-[16px] text-white rounded-xl opacity-50">
                Submit
              </button>
            </div>
          </section>
        )}
      </form>
    </main>
  );
};

export default Profile;
