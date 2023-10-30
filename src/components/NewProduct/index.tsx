/** @format */
"use client";

import React, { useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import Button from "@/components/Button";
import InputNumber from "../InputNumber";
import { storageDB } from "server/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addProduct } from "@/utils/product.apiCall";

interface IAddProduct {
  cancelBtn: (event: boolean) => void;
}

const initialProduct = {
  category: "shirt",
  description: "",
  image: "",
  name: "",
  price: 0,
  quantity: 0,
  createAt: 0,
};

export default function AddProduct({ cancelBtn }: IAddProduct) {
  const [product, setProduct] = useState<IProduct>(initialProduct);
  const [file, setFile] = useState<File>();
  const previewImg = useMemo(() => {
    return file ? URL.createObjectURL(file) : "";
  }, [file]);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChangeInput = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLSelectElement>) => {
    setProduct({
      ...product,
      [target.name]: target.value,
    });
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileFromLocal = event.target.files?.[0];
    //1MB = 1048576 B
    if (
      fileFromLocal &&
      (fileFromLocal.size >= 1048576 || !fileFromLocal.type.includes("image"))
    ) {
      toast.error("File không đúng định dạng quy định");
    } else {
      setFile(fileFromLocal);
    }
  };

  const handleInputFile = () => {
    inputFileRef.current?.click();
  };

  const handleSubmitBtn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const getUniqeTime = new Date().getTime();

    toast.dismiss();
    let fileName: string;
    event.preventDefault();
    if (
      product?.name == "" ||
      product?.category == "" ||
      product?.description == "" ||
      product?.price == undefined ||
      product?.quantity == undefined
    ) {
      toast.warn("Vui lòng nhập đầy đủ các thông tin");
    } else {
      if (file) {
        fileName = file?.size + getUniqeTime.toString();
        const storagePath = "uploads/" + file.name;
        const storageRef = ref(storageDB, storagePath);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              const newProduct: IProduct = {
                id: fileName,
                category: product.category,
                createAt: getUniqeTime,
                description: product.description,
                image: downloadURL,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
              };
              addProduct(fileName as string, newProduct);
            });
          }
        );
        toast.success("Thêm sản phẩm thành công");
        toast.clearWaitingQueue();
        setProduct(initialProduct);
        setFile(undefined);
      } else {
        toast.warn("Vui lòng thêm ảnh cho sản phẩm");
        toast.clearWaitingQueue();
      }
    }
  };

  return (
    <div className="relative w-[50%] text-black mb-14 dark:bg-gray-800 dark:text-white">
      <div>
        <>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6 border-b-2">
              <div className="text-center flex justify-between">
                <h6 className="text-gray-700 text-xl font-bold">Add Product</h6>
                <div className="bg-gray-700  transition-all active:bg-gray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear duration-150">
                  Hello there,
                </div>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white border-collapse">
              <div>
                <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Product Information
                </h6>
                <div className="flex flex-wrap items-center">
                  <div className="w-full lg:w-6/12 px-4 flex flex-col">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        className="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150"
                        value={product?.name}
                        name="name"
                        onChange={handleChangeInput}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Quantity
                      </label>
                      <InputNumber
                        type="text"
                        classNameInput="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150"
                        value={product?.quantity}
                        name="quantity"
                        onChange={handleChangeInput}
                      />
                    </div>
                  </div>

                  <div className="  w-full h-fit lg:w-6/12 px-4 flex justify-center">
                    <div className="relative">
                      <img
                        className=" w-40 h-40 rounded-md shadow-edit"
                        src={
                          product?.image
                            ? product.image
                            : previewImg ||
                              "https://tranhtomauchobe.com/wp-content/uploads/2021/03/Tuyen-Tap-Sach-To-Mau-Quan-Ao-Dang-Yeu-Cho-1.jpg"
                        }
                        alt="Rounded avatar"
                      />
                      <input
                        className="hidden"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        ref={inputFileRef}
                        onChange={onFileChange}
                        onClick={(event) => {
                          (event.target as any).value = null;
                        }}
                      />
                      <div
                        className="absolute h-15 w-15 bottom-1 right-1 bg-slate-400 hover:bg-slate-500 rounded-full text-white cursor-pointer"
                        onClick={handleInputFile}
                      >
                        <svg
                          className="w-5 h-5 mx-2 my-2 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Category
                      </label>
                      <select
                        className="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150 cursor-pointer"
                        name="category"
                        value={product?.category}
                        onChange={handleChangeInput}
                      >
                        <option value="shirt">Shirt</option>
                        <option value="pant">Pant</option>
                        <option value="shoe">Shoe</option>
                        <option value="accessory">Accessory</option>
                        <option value="technological">Technological</option>
                      </select>
                    </div>
                    <div className="relative w-full ">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Price
                      </label>
                      <InputNumber
                        type="text"
                        classNameInput="border-none py-3 placeholder-gray-300 text-gray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150"
                        value={product?.price}
                        name="price"
                        onChange={handleChangeInput}
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-gray-300" />

                <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Description
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Description
                      </label>
                      <textarea
                        className="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150"
                        rows={4}
                        value={product?.description}
                        name="description"
                        onChange={handleChangeInput}
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-between w-full lg:w-12/12 px-4 items-baseline">
                    <span className="text-gray-400 text-xs font-extralight">
                      Add product
                    </span>

                    <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse">
                      <Button
                        className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400  sm:ml-3 sm:w-auto"
                        contentButton="Submit"
                        onClick={handleSubmitBtn}
                      />
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => cancelBtn(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
