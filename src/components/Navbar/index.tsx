"use client"
import React, { useContext } from "react";
import Link from "next/link";
import Dropdown from "../Dropdown";
import { AppContext } from "@/context/app.context";

export default function Navbar() {
  const { profile, setProfile } = useContext(AppContext);

  return (
    <div>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <Link
            href={"/"}
            className="text-white cursor-pointer text-sm uppercase hidden hover:text-blue-300 lg:inline-block font-semibold"
          >
            Dashboard
          </Link>
          <div className="flex-col md:flex-row list-none items-center hidden md:flex">
            <Dropdown profile={profile} setProfile={setProfile } />
          </div>
        </div>
      </nav>
    </div>
  );
}
