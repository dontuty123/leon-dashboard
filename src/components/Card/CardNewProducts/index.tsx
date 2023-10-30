"use client";

import React, { useEffect, useState } from "react";
import { formatCurrency } from "@/utils/utils";
import { onValue, ref } from "firebase/database";
import { db } from "server/firebase";
import Link from "next/link";
import TableSkeleton from "@/components/Skeleton/TableSkeleton";

export default function CardNewProducts() {
  const [productList, setProductList] = useState<IProduct[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });

  useEffect(() => {
    const productListRef = ref(db, "products");
    onValue(productListRef, (snapshot) => {
      const val = snapshot.val();
      const data: IProduct[] = Object.values(val);
      setProductList(data);
    });
  }, []);

  const sortedProduct = productList
    ?.sort((a, b) => a.createAt - b.createAt)
    .slice(0, 5);

  return (
    <div>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold truncate text-base text-blueGray-700">
                New Products
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <Link
                href={"/products"}
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
          <div className="block w-full">
            {/* Projects table */}
            <div className="items-center w-full bg-transparent border-collapse">
              <div className="truncate">
                <div className="flex flex-wrap">
                  <div className="px-4 md:w-1/3 w-full bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Name
                  </div>
                  <div className="px-4 md:w-1/3 w-full bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Category
                  </div>
                  <div className="px-4 md:w-1/3 w-full bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Price
                  </div>
                </div>
              </div>
              {sortedProduct?.map(({ name, category, price, id }) => (
                <div className="flex flex-wrap items-center w-full" key={id}>
                  <div className="border-t-0 w-full md:w-1/3 px-4 truncate align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-semibold">
                    {name}
                  </div>
                  <div className="border-t-0 w-full md:w-1/3 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {category}
                  </div>
                  <div className="border-t-0 w-full md:w-1/3 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {formatCurrency(price)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
