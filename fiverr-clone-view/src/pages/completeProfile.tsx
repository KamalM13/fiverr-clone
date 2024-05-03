import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    profilePicture: "",
    description: "",
  });
  const [error, setError] = useState([]);
  const [backError, setBackError] = useState("");
  const navigate = useNavigate();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError([]);
    setBackError("");
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleRoleChange = (role: string) => {
    setFormState((prevState) => ({
      ...prevState,
      role,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState((prevState) => ({
          ...prevState,
          profilePicture: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <hr />
      <hr />
      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse py-3 px-2">
        <li className="flex items-center text-green-600 dark:text-green-500 space-x-2.5 rtl:space-x-reverse">
          <span className="flex items-center justify-center w-8 h-8 border border-green-600 rounded-full shrink-0 dark:border-green-500">
            1
          </span>
          <span>
            <h2 className="font-medium leading-tight">Personal info</h2>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </li>
        <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
          </span>
          <span>
            <h2 className="font-medium leading-tight">Professional info</h2>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </li>
        <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
          </span>
          <span>
            <h2 className="font-medium leading-tight">Account security</h2>
          </span>
        </li>
      </ol>
      <hr className="pt-5" />
      <div className="py-4 px-2">
        <h1 className="text-black opacity-70 font-bold text-4xl">
          Personal Info
        </h1>
        <br />
        <p className="text-black opacity-70">
          Tell us a bit about yourself. This information will appear on your{" "}
          <br /> public profile, so that potential buyers can get to know you
          better.
        </p>
      </div>
      <hr className="py-5" />
      {/* First name and Last name */}
      <div className="flex items-center py-4 px-2 justify-between">
        <div className="flex items-center">
          <h1 className="text-black opacity-70  font-normal text-xl mr-2">
            Full Name
          </h1>
          <span className="italic text-gray-400">private</span>
        </div>
        <div className="flex">
          <div className="flex flex-col ml-4 mr-8">
            <input
              type="text"
              id="firstName"
              className="py-1 pl-2 pr-1 text-gray-900 border border-gray-300 rounded-[8px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-full md:w-64 lg:w-80"
              placeholder="First Name"
              onChange={handleInputChange}
              value={formState.firstName}
            />
          </div>
          <div className="flex flex-col ml-4">
            <input
              type="text"
              id="lastName"
              className="py-1 pl-2 pr-1 text-gray-900 border border-gray-300 rounded-[8px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-full md:w-64 lg:w-80"
              placeholder="Last Name"
              onChange={handleInputChange}
              value={formState.lastName}
            />
          </div>
        </div>
        <div></div>
      </div>
      <br />
      <div className="flex items-center py-4 px-2  justify-between">
        <div className="flex items-center">
          <h1 className="text-black opacity-70  font-normal text-xl mr-2">
            Display Name
          </h1>
        </div>
        <div className="flex">
          <div className="flex flex-col ml-4 mr-8">
            <input
              type="text"
              id="displayName"
              className="py-1 pl-2 pr-1 text-gray-900 border border-gray-300 rounded-[8px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-full md:w-64 lg:w-80"
              placeholder="Display Name"
              onChange={handleInputChange}
              value={formState.displayName}
            />
          </div>
        </div>
        <div></div>
        <div className=" px-8"></div>
      </div>
      <br />
      <div className="flex items-center py-4 px-2 justify-between">
        <div className="flex items-center">
          <h1 className="text-black opacity-70 font-normal text-xl mr-2">
            Profile Picture
          </h1>
        </div>
        <div className="text-center justify-between">
          <input
            id="profilePictureInput"
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileUpload}
            accept="image/*"
          />
          <label htmlFor="profilePictureInput" className="cursor-pointer">
            {formState.profilePicture ? (
              <img
                className="w-32 h-32 rounded-full"
                src={formState.profilePicture}
                alt="Profile"
              />
            ) : (
              <div className="w-32 h-32 rounded-full flex justify-center items-center border-2 border-gray-300 bg-gray-200">
                <img
                  className="w-10"
                  src="https://www.svgrepo.com/show/33565/upload.svg"
                  alt="Upload"
                />
              </div>
            )}
          </label>
        </div>
        <div></div>
        <div></div>
      </div>
      <br />
      <div className="flex items-center py-4 px-2 justify-between">
        <div className="flex items-center">
          <h1 className="text-black opacity-70 font-normal text-xl mr-2">
            Description
          </h1>
        </div>
        <div className="flex flex-col ml-4 mr-8">
          <textarea
            name="description"
            id="description"
            className="block p-2.5 w-full md:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            onChange={handleInputChange}
            value={formState.description}
            rows={6}
            maxLength={600}
          />
          <p className="text-sm text-gray-500 mt-1">
            {formState.description.length}/600
          </p>
        </div>
        <div></div>
        <div className="px-8"></div>
      </div>
      <div className=" justify-center flex py-10">
        <Button
          onClick={() => {
            navigate("/personalInfo");
          }}
          className=" bg-green-500 text-white rounded shadow-lg hover:bg-green-400 justify-center items-center"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CompleteProfile;
