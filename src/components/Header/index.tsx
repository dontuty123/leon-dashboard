"use client";
import React, { useEffect, useState } from "react";
import CardStats from "../Card/CardStats";
import { onValue, ref } from "firebase/database";
import { db } from "server/firebase";
import {
  compareCalculate,
  ratioCalculate,
  ratioRevanueCalculate,
  revanueCalculate,
} from "@/utils/calculate";

interface ICard {
  statTitleProduct: number;
  statTitleUser: number;
  statTitleSale: number;
  statTitleTotalAmount: number;
}

export default function Header() {
  const [products, setProducts] = useState<IProduct[] | null>();
  const [transaction, setTransaction] = useState<ITransaction[] | null>();
  const [users, setUsers] = useState<IUser[] | null>();

  useEffect(() => {
    const userListRef = ref(db, "users");
    onValue(userListRef, (snapshot) => {
      const val = snapshot.val();
      const data: IUser[] = Object.values(val);
      setUsers(data);
    });

    const productListRef = ref(db, "products");
    onValue(productListRef, (snapshot) => {
      const val = snapshot.val();
      const data: IProduct[] = Object.values(val);
      setProducts(data);
    });
    const transactionsRef = ref(db, "transaction");
    onValue(transactionsRef, (snapshot) => {
      const val = snapshot.val();
      const data: ITransaction[] = Object.values(val);
      setTransaction(data);
    });
  }, []);

  return (
    <>
      <div className="relative bg-cyan-900 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW PRODUCT"
                  statTitle={compareCalculate(products as IProduct[])}
                  statPercent={ratioCalculate(products as IProduct[])}
                  statArrow={
                    Number(ratioCalculate(products as IProduct[])) > 0
                      ? "up"
                      : "down"
                  }
                  statPercentColor={
                    Number(ratioCalculate(products as IProduct[])) > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                  statDescripiron="Since last week"
                  statIconName={
                    <svg
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 0H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1Zm14 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM5 14H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm14 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM12 2H8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2Zm0 14H8a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-8-4V8a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0Zm14 0V8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Z" />
                    </svg>
                  }
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle={compareCalculate(users as IUser[])}
                  statArrow={
                    Number(ratioCalculate(users as IUser[])) > 0 ? "up" : "down"
                  }
                  statPercent={ratioCalculate(users as IUser[])}
                  statPercentColor={
                    Number(ratioCalculate(users as IUser[])) > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                  statDescripiron="Since last week"
                  statIconName={
                    <svg
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 19"
                    >
                      <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                      <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                    </svg>
                  }
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle={compareCalculate(transaction as ITransaction[])}
                  statArrow={
                    Number(ratioCalculate(products as IProduct[])) > 0
                      ? "up"
                      : "down"
                  }
                  statPercent={ratioCalculate(transaction as ITransaction[])}
                  statPercentColor={
                    Number(ratioCalculate(products as IProduct[])) > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                  statDescripiron="Since last week"
                  statIconName={
                    <svg
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                  }
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOTAL REVANUE"
                  statTitle={revanueCalculate(transaction as ITransaction[])}
                  statArrow={
                    Number(
                      ratioRevanueCalculate(transaction as ITransaction[])
                    ) > 0
                      ? "up"
                      : "down"
                  }
                  statPercent={ratioRevanueCalculate(
                    transaction as ITransaction[]
                  )}
                  statPercentColor={
                    Number(
                      ratioRevanueCalculate(transaction as ITransaction[])
                    ) > 0
                      ? "text-blue-500"
                      : "text-red-500"
                  }
                  statDescripiron="Since last week"
                  statIconName={
                    <svg
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1v14h16M4 10l3-4 4 4 5-5m0 0h-3.207M16 5v3.207"
                      />
                    </svg>
                  }
                  statIconColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
