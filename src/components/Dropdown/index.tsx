"use client";
import { AppContext } from "@/context/app.context";
import { clearProfileFromLS } from "@/utils/auth";
import Link from "next/link";
import React, { useContext } from "react";

export default function Dropdown() {
  const { profile, setProfile } = useContext(AppContext);

  const handleSignOut = () => {
    setProfile(null);
    clearProfileFromLS();
  };

  console.log(profile);

  return (
    <div>
      {profile ? (
        <div>
          <button
            id="dropdownAvatarNameButton"
            data-dropdown-toggle="dropdownAvatarName"
            className="flex items-center text-sm font-medium text-white  rounded-full hover:text-blue-400 hover:ring-1 hover:ring-gray-100 dark:hover:text-gray-500 md:mr-0 focus:ring-1 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white p-2"
            type="button"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 mr-2 rounded-full"
              src={profile?.avatar}
              alt={profile?.name}
            />
            {profile?.name}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdownAvatarName"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div className="font-medium ">{profile?.name}</div>
              <div className="truncate">{profile?.email}</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
            >
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href={`/users/edit/` + profile?.id}
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit profile
                </Link>
              </li>
            </ul>
            <div className="pb-2">
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Link href="/login">
          <span className="text-white font-semibold text-md hover:text-blue-300">
            Sign In
          </span>
        </Link>
      )}
    </div>
  );
}
