"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Dropdown from "../Dropdown";
import { AppContext } from "@/context/app.context";

export default function Navbar() {
  const { profile, setProfile } = useContext(AppContext);

  return (
    <div>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <Link
            href={"/"}
            className="text-white mt-4 cursor-pointer text-sm uppercase hover:text-blue-300 font-semibold"
          >
            Dashboard
          </Link>
          <div className="flex-col md:flex-row list-none items-center md:flex">
            <Dropdown profile={profile} setProfile={setProfile} />
          </div>
        </div>
      </nav>
    </div>
  );
}
