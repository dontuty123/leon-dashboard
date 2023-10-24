import React from "react";
import { formatCurrency } from "@/utils/utils";

export default function CardNewProducts() {
  return (
    <div>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                New Products
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full">
          {/* Projects table */}
          <div className="items-center w-full bg-transparent border-collapse">
            <div className="truncate">
              <div className="flex items-center">
                <div className="px-6 bg-blueGray-50 w-1/3 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Name
                </div>
                <div className="px-6 bg-blueGray-50 w-1/3 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Category
                </div>
                <div className="px-6 bg-blueGray-50 w-1/3 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                  Price
                </div>
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="border-t-0 w-1/3 truncate px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-semibold">
                Camera hành trình Gopro Hero 11 - Chính Hãng FPT
              </div>
              <div className="border-t-0 px-6 w-1/3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                Camera
              </div>
              <div className="border-t-0 px-6 w-1/3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {formatCurrency(9200000)}{" "}
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="border-t-0 w-1/3 truncate px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-semibold">
                Camera hành trình Gopro Hero 11 - Chính Hãng FPT
              </div>
              <div className="border-t-0 px-6 w-1/3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                Camera
              </div>
              <div className="border-t-0 px-6 w-1/3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {formatCurrency(9200000)}
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="border-t-0 w-1/3 truncate px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-semibold">
                Camera hành trình Gopro Hero 11 - Chính Hãng FPT
              </div>
              <div className="border-t-0 px-6 w-1/3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                Camera
              </div>
              <div className="border-t-0 px-6 w-1/3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {formatCurrency(9200000)}{" "}
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="border-t-0 w-1/3 truncate px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-semibold">
                Camera hành trình Gopro Hero 11 - Chính Hãng FPT
              </div>
              <div className="border-t-0 px-6 w-1/3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                Camera
              </div>
              <div className="border-t-0 px-6 w-1/3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {formatCurrency(9200000)}{" "}
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="border-t-0 w-1/3 truncate px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-semibold">
                Camera hành trình Gopro Hero 11 - Chính Hãng FPT
              </div>
              <div className="border-t-0 px-6 w-1/3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                Camera
              </div>
              <div className="border-t-0 px-6 w-1/3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {formatCurrency(9200000)}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
