//@ts-nocheck
"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Button from "@/components/Button";
import { ICols } from "@/types/static.type";
import Pagination from "../Pagination";
import { AppContext } from "@/context/app.context";
import classNames from "classnames";

interface IDashboard {
  curCols: ICols[];
  curRows: any;
  title: string;
  preLink: string;
  addLink?: string;
  isAddBtn?: boolean;
  handleDelete?: (id: string) => void;
}

export default function Dashboard({
  curRows,
  curCols,
  title,
  preLink,
  addLink,
  isAddBtn,
  handleDelete,
}: IDashboard) {
  const { profile } = useContext(AppContext);

  const [pages, setPages] = useState<number>(0);
  const [rowInput, setRowInput] = useState<number>(6);
  const [curPage, setCurPage] = useState(1);
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
              <Link href={addLink}>
                <Button
                  className="py-2 px-7  border-cyan-900 border cursor-pointer hover:bg-blue-300 hover:text-white rounded-md ml-10 font-semibold text-md"
                  contentButton="➕ Add product"
                />
              </Link>
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
        <div className="flex flex-wrap items-center">
          <div className="p-4 border-b w-full ">
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
                    {itemrow[itemcol.field]}
                  </div>
                ))}
                <Link href={`${preLink}/${itemrow.id}`}>
                  <Button
                    className="col-span-1 bg-transparent hover:bg-blue-500 dark:text-white text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
                    contentButton="Edit"
                  />
                </Link>
                <Button
                  disabled={profile?.role == "user" ? true : false}
                  className={classNames(
                    "col-span-1 bg-transparent hover:bg-rose-500 dark:text-white text-rose-700 font-semibold hover:text-white px-4 border border-rose-500 hover:border-transparent rounded",
                    {
                      "!cursor-not-allowed !bg-gray-300 !text-white !hover:bg-gray-300 !border-gray-500":
                        profile?.role == "user",
                    }
                  )}
                  onClick={() => handleDelete(itemrow?.id)}
                  contentButton="Delete"
                />
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
