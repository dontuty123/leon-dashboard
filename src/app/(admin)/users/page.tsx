"use client";

import React, { useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard/index";
import { ICols } from "@/types/static.type";
import { onValue, ref, remove } from "firebase/database";
import { db } from "server/firebase";

export default function Users() {
  const collumn: ICols[] = [
    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
    {
      field: "name",
      headerName: "Full Name",
      width: 120,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
    },
    {
      field: "role",
      headerName: "Role",
      width: 120,
    },
  ];

  const [userList, setUserList] = useState<IUser[] | null>();

  useEffect(() => {
    const userListRef = ref(db, "users");
    onValue(userListRef, (snapshot) => {
      const val = snapshot.val();
      const data: IUser[] = Object.values(val);
      data.sort((a, b) => b.createAt - a.createAt);
      setUserList(data);
    });
  }, []);

  const handleDelete = (id: string) => {
    const deleteUserRef = ref(db, "users/" + id);
    remove(deleteUserRef);
  };
  return (
    <div>
      <Dashboard
        curCols={collumn}
        curRows={userList ? userList : []}
        title="User Dashboard"
        preLink="users/edit"
        handleDelete={handleDelete}
        currentModal="users"
      />
    </div>
  );
}
