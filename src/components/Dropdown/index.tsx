import Link from "next/link";
import React from "react";

export default function Dropdown() {
  return (
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
          src="data:image/jpeg;base64,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"
          alt="user photo"
        />
        Bonnie Green
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
          <div className="font-medium ">Pro User</div>
          <div className="truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li>
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </Link>
          </li>
        </ul>
        <div className="py-2">
          <Link
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}
