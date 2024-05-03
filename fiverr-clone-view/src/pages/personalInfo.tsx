import React, { useState, useRef, useEffect } from "react";

const PersonalInfo = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close Dropdown on Outside Click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener for mousedown
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div>
      <hr />
      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse py-3 px-2">
        <li className="flex items-center text-green-600 dark:text-green-500 space-x-2.5 rtl:space-x-reverse">
          <span className="flex items-center justify-center w-8 h-8 border border-green-600 bg-green-600  rounded-full shrink-0 dark:border-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
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
        <li className="flex items-center text-green-600 dark:text-green-500 space-x-2.5 rtl:space-x-reverse">
          <span className="flex items-center justify-center w-8 h-8 border border-green-600 rounded-full shrink-0 dark:border-green-500">
            2
          </span>
          <span>
            <h2 className="font-medium leading-tight text-green-600 dark:text-green-500">
              Professional info
            </h2>
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
      <hr className="my-5" />
      <div className="py-4 px-2">
        <h1 className="text-black opacity-70 font-bold text-4xl">
          Personal Info
        </h1>
        <br />
        <p className="text-black opacity-70">
          This is your time to shine. Let potential buyers know what you do{" "}
          <br />
          best and how you gained your skills, certifications and experience.
        </p>
      </div>
      <hr className="py-5 my-5" />
      <div className="flex items-center py-4 px-2 justify-between">
        <div className="flex items-center">
          <h1 className="text-black opacity-70  font-normal text-xl mr-2">
            Your Occupation
          </h1>
        </div>
        <div className="relative inline-block text-left">
          <button
            ref={dropdownRef as unknown as React.RefObject<HTMLButtonElement>}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
            onClick={toggleDropdown}
          >
            Project users
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            ref={dropdownRef}
            className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <div className="py-1">
              {/* Dropdown menu items */}
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm">
                Jese Leos
              </a>
              {/* More items */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
