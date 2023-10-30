"use client";

import TableSkeleton from "@/components/Skeleton/TableSkeleton";
import { onValue, ref } from "firebase/database";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { db } from "server/firebase";

export default function CardNewUsers() {
  const [userList, setUserList] = useState<IUser[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });

  useEffect(() => {
    const userListRef = ref(db, "users");
    onValue(userListRef, (snapshot) => {
      const val = snapshot.val();
      const data: IUser[] = Object.values(val);
      setUserList(data);
    });
  }, []);

  const sortedUser = userList
    ?.sort((a, b) => a.createAt - b.createAt)
    .slice(0, 5);

  return (
    <div>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                New Users
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <Link
                href={"/users"}
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear divansition-all duration-150"
                type="button"
              >
                See all
              </Link>
            </div>
          </div>
        </div>
        {isLoading ? (
          <TableSkeleton rowSkeleton={7} />
        ) : (
          <div className="w-full">
            {/* Projects table */}
            <div className="items-center w-full bg-transparent border-collapse">
              <div className="flex w-full flex-wrap">
                <div className="px-4 w-full md:w-2/5 bg-blueGray-50 text-blueGray-500 truncate align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Email
                </div>
                <div className="px-4 w-full md:w-1/5 bg-blueGray-50 text-blueGray-500 truncate align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Full Name
                </div>
                <div className="px-4 w-full md:w-1/5 bg-blueGray-50 text-blueGray-500 truncate align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Phone
                </div>
                <div className="px-4 w-full md:w-1/5 bg-blueGray-50 text-blueGray-500 truncate align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Role
                </div>
              </div>
              <div>
                {sortedUser?.map(({ email, name, phone, role, id }) => (
                  <div className="flex w-full flex-wrap" key={id}>
                    <div className="font-semibold px-4 w-full md:w-2/5 border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {email}
                    </div>
                    <div className="px-4 w-full md:w-1/5 border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {name}
                    </div>
                    <div className="px-4 w-full md:w-1/5 border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {phone}
                    </div>
                    <div className="px-4 w-full md:w-1/5 border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
