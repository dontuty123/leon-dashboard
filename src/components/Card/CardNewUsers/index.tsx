import React from "react";

export default function CardNewUsers() {
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
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear divansition-all duration-150"
                type="button"
              >
                See all
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* Projects table */}
          <div className="items-center w-full bg-divansparent border-collapse">
            <div className="flex w-full">
              <div className="px-6 bg-blueGray-50 w-2/5 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Email
              </div>
              <div className="px-6 bg-blueGray-50 w-1/5 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Full Name
              </div>
              <div className="px-6 bg-blueGray-50 w-1/5 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Phone
              </div>
              <div className="px-6 bg-blueGray-50 w-1/5 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Role
              </div>
            </div>
            <div>
              <div className="flex w-full">
                <div className="border-t-0 px-6 w-2/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  thuc@pro.com
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Phạm Tri Thức
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  0923012302
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Owner
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-t-0 px-6 w-2/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  thuc09982@pro.com
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Nguyễn Minh Thức
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  0936825913
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Admin
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-t-0 px-6 w-2/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  alabatrap@gmail.vui
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Anh Lý Bà Ba
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  0122384612
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  User
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-t-0 px-6 w-2/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  vogiasieucap@vip.pro
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Ta Là Võ Giả
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  0999999999
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  User
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-t-0 px-6 w-2/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  helloword@gmail.create
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Hello Word!
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  0000000000
                </div>
                <div className="border-t-0 px-6 w-1/5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Admin
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
