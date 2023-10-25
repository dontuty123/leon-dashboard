import Button from "@/components/Button";
import React from "react";

export default function EditUser() {
  return (
    <div>
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6 border-b-2">
            <div className="text-center flex justify-between">
              <h6 className="text-gray-700 text-xl font-bold">My account</h6>
              <button
                className="bg-gray-700 transition-all active:bg-gray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear duration-150"
                type="button"
              >
                Settings
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white border-collapse">
            <div>
              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-6/12 px-4 flex flex-col">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150"
                      defaultValue="lucky.jesse"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150"
                      defaultValue="jesse@example.com"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-6/12 px-4 flex justify-center">
                  <img
                    className="w-40 h-40 rounded-full"
                    src="https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg"
                    alt="Rounded avatar"
                  />
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-gray-300" />

              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150"
                      defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Country
                    </label>
                    <input
                      type="email"
                      className="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150"
                      defaultValue="United State"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      className=" px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150 border-none"
                      defaultValue="0989901328"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150"
                      defaultValue="752-0012"
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-gray-300" />

              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About Me
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      About me
                    </label>
                    <textarea
                      className="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150"
                      rows={4}
                      defaultValue="A beautiful UI Kit and Admin for NextJS & Tailwind CSS. It is Free
                  and Open Source."
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-between w-full lg:w-12/12 px-4 items-baseline">
                  <span className="text-gray-400 text-xs font-extralight">
                    Edit profile
                  </span>
                  <Button
                    className="bg-blue-500 text-white w-[30%] mt-5 py-3 hover:bg-blue-400 cursor-pointer hover:border rounded-md"
                    contentButton="Submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
