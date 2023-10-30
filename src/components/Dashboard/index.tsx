//@ts-nocheck
"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Button from "@/components/Button";
import { ICols } from "@/types/static.type";
import Pagination from "../Pagination";
import { AppContext } from "@/context/app.context";
import classNames from "classnames";
import EditProductController from "../Edit/EditProductController";
import EditUserController from "../Edit/EditUserController";
import { formatCurrency } from "@/utils/utils";
import  NewProduct  from "@/components/NewProduct";

interface IDashboard {
  curCols: ICols[];
  curRows: any;
  title: string;
  preLink: string;
  addLink?: string;
  isAddBtn?: boolean;
  currentModal?: string;
  handleDelete?: (id: string) => void;
}

export default function Dashboard({
  curRows,
  curCols,
  title,
  addLink,
  currentModal,
  isAddBtn,
  handleDelete,
}: IDashboard) {
  const { profile } = useContext(AppContext);

  const [pages, setPages] = useState<number>(0);
  const [rowInput, setRowInput] = useState<number>(6);
  const [curPage, setCurPage] = useState(1);
  const [editID, setEditID] = useState<string | null>();
  const [deleteID, setDeleteID] = useState<string | null>();
  const [isAddNewController, setIsAddNewController] = useState<boolean>(false);
  const [curUsers, setCurUsers] = useState<IUser[]>();

  //dựa trên số row của 1 page, chia lấy số pages và danh sách các user của trang thứ nhất.
  useEffect(() => {
    const paginateUsers = curRows.slice(0, rowInput);
    setPages(Math.ceil(rowInput > 0 ? curRows.length / rowInput : 1));
    setCurUsers(paginateUsers);
  }, [curRows, rowInput]);

  //dựa trên trang hiện tại, tìm các index và sử dụng hàm slice để tạo mảng user và hiển thị các user của trang đó
  useEffect(() => {
    const firstIndex = (curPage - 1) * rowInput;
    let secIndex = curPage * rowInput;
    if (secIndex > curRows?.length) {
      secIndex == curRows?.length;
    }
    const paginateUsers = curRows?.slice(firstIndex, secIndex);
    setCurUsers(paginateUsers);
  }, [curPage, curRows, rowInput]);

  const handlePrevPage = () => {
    if (curPage == 1) {
      setCurPage(1);
    } else {
      setCurPage(curPage - 1);
    }
  };

  const handleNextPage = () => {
    if (curPage == pages) {
    } else {
      setCurPage(curPage + 1);
    }
  };

  //Loại bỏ kí tự khác số
  const restrictToNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
  };

  const handleChangeRowInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setRowInput(target.value);
  };

  return (
    <div className="mb-16">
      <div className="relative overflow-auto w-full dark:rounded-none rounded-md shadow-md bg-white dark:bg-gray-900 dark:text-white ">
        <div className="border-b p-4 flex justify-between items-center">
          <div>
            <span className="text-md font-semibold">{title}</span>
            {isAddBtn ? (
              <button
                className="py-2 px-7  border-cyan-900 border cursor-pointer hover:bg-blue-300 hover:text-white rounded-md ml-10 font-semibold text-md"
                onClick={() => setIsAddNewController(!isAddNewController)}
              >
                ➕ Add product
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="px-4 ">
            <span className="text-md font-semibold">Rows per page</span>
            <input
              onInput={(event) =>
                restrictToNumbers(event as ChangeEvent<HTMLInputElement>)
              }
              value={rowInput}
              onChange={handleChangeRowInput}
              className="ml-3 border border-gray-300 bg-white dark:text-white font-light focus:outline-none rounded-md text-sm px-2 py-1"
            />
          </div>
        </div>
        <div className="flex flex-col  overflow-x-auto items-center">
          <div className="p-4 border-b w-full">
            <div className="flex gap-4 text-left">
              {curCols?.map((item, index) => (
                <div
                  className="font-semibold hover:border-x-2"
                  key={index}
                  style={
                    item.width ? { width: item.width } : { width: "200px" }
                  }
                >
                  {item.headerName}
                </div>
              ))}
              <div className="font-semibold hover:border-x-2 w-48">Action</div>
            </div>
          </div>

          {/* ADDNEW MODAL */}
          {isAddNewController && (
            <div
              className="relative z-10"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-gray-500/30 transition-opacity" />
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
                  <NewProduct cancelBtn={setIsAddNewController} />
                </div>
              </div>
            </div>
          )}

          {/* EDIT MODAL */}
          {editID && (
            <div
              className="relative z-10"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-gray-500/30 transition-opacity" />
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
                  {currentModal == "products" ? (
                    <EditProductController id={editID} setID={setEditID} />
                  ) : (
                    <EditUserController id={editID} setID={setEditID} />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* DELETE MODAL */}
          {deleteID && (
            <div
              className="relative z-10"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-gray-500/30 transition-opacity" />
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg
                            className="h-6 w-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <h3
                            className="text-base font-semibold leading-6 text-gray-900"
                            id="modal-title"
                          >
                            Delete item
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Are you sure you want to delete this item? After
                              press &quot;Delete&quot;, this item will be
                              deleted and unable to restore
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => handleDelete(deleteID)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setDeleteID(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {curUsers?.map((itemrow, index) => (
            <div
              className="p-4 border-b gap-4 w-full hover:bg-gray-200/40 overflow-auto "
              key={index}
            >
              <div className="flex gap-4 text-left flex-nowrap">
                {curCols?.map((itemcol, index) => (
                  <div
                    className="font-normal truncate"
                    key={index}
                    style={
                      itemcol.width
                        ? { width: itemcol.width }
                        : { width: "200px" }
                    }
                  >
                    {itemcol?.isNumber
                      ? formatCurrency(itemrow[itemcol.field] || 0)
                      : itemrow[itemcol.field]}
                  </div>
                ))}
                <Button
                  className="col-span-1 bg-transparent hover:bg-blue-500 dark:text-white text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
                  contentButton="Edit"
                  onClick={() => setEditID(itemrow?.id)}
                />

                <button
                  disabled={profile?.role == "user" ? true : false}
                  className={classNames(
                    "col-span-1 bg-transparent hover:bg-rose-500 dark:text-white text-rose-700 font-semibold hover:text-white px-4 border border-rose-500 hover:border-transparent rounded",
                    {
                      "!cursor-not-allowed !bg-gray-300 !text-white !hover:bg-gray-300 !border-gray-500":
                        profile?.role == "user",
                    }
                  )}
                  onClick={() => setDeleteID(itemrow?.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Pagination
          curPage={curPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          pages={pages}
          setCurPage={setCurPage}
        />
      </div>
    </div>
  );
}
