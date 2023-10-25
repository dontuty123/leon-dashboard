"use client";
import React, { useContext, useEffect, useState } from "react";
import Button from "@/components/Button";
import { useParams } from "next/navigation";
import { onValue, ref, update } from "firebase/database";
import { db } from "server/firebase";
import { saveProfileToLS } from "@/utils/auth";
import { AppContext } from "@/context/app.context";

export default function EditController() {
  const { setProfile } = useContext(AppContext);
  const [curProfile, setCurProfile] = useState<IUser>({
    address: "",
    avatar: "",
    country: "",
    createAt: 0,
    description: "",
    email: "",
    name: "",
    phone: "",
    role: "user",
    zipcode: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const getcurProfile = ref(db, "users/" + id);
    onValue(getcurProfile, (snapshot) => {
      const data = snapshot.val();
      setCurProfile(data);
    });
  }, [id]);

  const handleChangeInput = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurProfile({
      ...curProfile,
      [target.name]: target.value,
    });
  };

  const handleSubmit = () => {
    update(ref(db, "users/" + id), curProfile);
    setProfile(curProfile);
    saveProfileToLS(curProfile);
  };

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
                      value={curProfile?.name}
                      name="name"
                      onChange={handleChangeInput}
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
                      value={curProfile?.email}
                      name="email"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div className="  w-full h-fit lg:w-6/12 px-4 flex justify-center">
                  <div className="relative">
                    <img
                      className=" w-40 h-40 rounded-full shadow-lg"
                      src="https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg"
                      alt="Rounded avatar"
                    />
                    <div className="absolute h-15 w-15 bottom-1 right-1 bg-slate-500 hover:bg-slate-400 rounded-lg text-white cursor-pointer">
                      <svg
                        className="w-6 h-6 mx-2 my-1 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"
                        />
                      </svg>
                    </div>
                  </div>
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
                      value={curProfile?.address}
                      name="address"
                      onChange={handleChangeInput}
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
                      type="text"
                      className="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150"
                      value={curProfile?.country}
                      name="country"
                      onChange={handleChangeInput}
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
                      value={curProfile?.phone}
                      name="phone"
                      onChange={handleChangeInput}
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
                      value={curProfile?.zipcode}
                      name="zipcode"
                      onChange={handleChangeInput}
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
                      value={curProfile?.description}
                      name="description"
                      onChange={handleChangeInput}
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-between w-full lg:w-12/12 px-4 items-baseline">
                  <span className="text-gray-400 text-xs font-extralight">
                    Edit curProfile
                  </span>
                  <Button
                    className="bg-blue-500 text-white w-[30%] mt-5 py-3 hover:bg-blue-400 cursor-pointer hover:border rounded-md"
                    contentButton="Submit"
                    onClick={handleSubmit}
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
