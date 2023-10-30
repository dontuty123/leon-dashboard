"use client";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Button from "@/components/Button";
import { useParams } from "next/navigation";
import { onValue, update, ref as refDB } from "firebase/database";
import { db, storageDB } from "server/firebase";
import { AppContext } from "@/context/app.context";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import classNames from "classnames";
import { formatCurrency } from "@/utils/utils";

const initialProfile: IProduct = {
  createAt: 0,
  description: "",
  name: "",
  category: "",
  image: "",
  price: 0,
  quantity: 10,
  sold: 0,
};

interface IEditProductController {
  id: string;
  setID: (value: React.SetStateAction<string | null | undefined>) => void;
}

export default function EditProductController({
  id,
  setID,
}: IEditProductController) {
  const { profile } = useContext(AppContext);
  const [curProduct, setCurProduct] = useState<IProduct>(initialProfile);
  const [file, setFile] = useState<File>();
  const [disabled, setDisabled] = useState<boolean>(false);
  const previewImg = useMemo(() => {
    return file ? URL.createObjectURL(file) : "";
  }, [file]);
  const inputFileRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    const getcurProduct = refDB(db, "products/" + id);
    onValue(getcurProduct, (snapshot) => {
      const data = snapshot.val();
      setCurProduct(data);
    });
  }, [id]);

  const handleChangeInput = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLSelectElement>) => {
    setCurProduct({
      ...curProduct,
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
      toast.error(
        "File không đúng định dạng quy định (Kích thước > 1mb hoặc không phải là ảnh"
      );
    } else {
      setFile(fileFromLocal);
    }
  };

  const handleInputFile = () => {
    inputFileRef.current?.click();
  };

  const handleSubmit = () => {
    setDisabled(true);
    toast.dismiss();
    if (file) {
      const storagePath = "product/" + file.name;
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

            const newProduct = {
              ...curProduct,
              image: downloadURL,
            };

            update(refDB(db, "products/" + id), newProduct);

            // nếu sửa thông tin của bản thân thì save lại trên local storage và app context
          });
        }
      );
      toast.success("Sửa thông tin thành công");
      setID(null);
      toast.clearWaitingQueue();
    } else {
      update(refDB(db, "products/" + id), curProduct);

      toast.success("Sửa thông tin thành công");
      setID(null);
      toast.clearWaitingQueue();
    }
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <div>
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6 border-b-2">
            <div className="text-center flex justify-between">
              <h6 className="text-gray-700 text-xl font-bold">Edit Product</h6>
              <button
                className="bg-gray-700 transition-all active:bg-gray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear duration-150"
                type="button"
              >
                Settings
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white border-collapse">
            <div>
              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Product information
              </h6>
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-6/12 px-4 flex flex-col">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Product&apos;s name
                    </label>
                    <input
                      type="text"
                      disabled={
                        profile?.role == "admin" ||
                        profile?.role == "owner" ||
                        profile?.id == id
                          ? false
                          : true
                      }
                      className={classNames(
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150",
                        {
                          "!cursor-not-allowed":
                            profile?.role == "user" && profile?.id != id,
                        }
                      )}
                      value={curProduct?.name || ""}
                      name="name"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Category
                    </label>
                    <select
                      className={classNames(
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150 cursor-pointer",
                        {
                          "!cursor-not-allowed": profile?.role == "user",
                        }
                      )}
                      name="category"
                      disabled={profile?.role != "user" ? false : true}
                      value={curProduct?.category}
                      onChange={handleChangeInput}
                    >
                      <option value="shirt">Shirt</option>
                      <option value="pant">Pant</option>
                      <option value="shoe">Shoe</option>

                      <option value="accessory">Accessory</option>
                      <option value="technological">Technological</option>
                    </select>
                  </div>
                </div>

                <div className="  w-full h-fit lg:w-6/12 px-4 flex justify-center">
                  <div className="relative">
                    <img
                      className=" w-40 h-40 rounded-md shadow-edit"
                      src={previewImg ? previewImg : curProduct?.image}
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
                    <button
                      disabled={profile?.role != "user" ? false : true}
                      className={classNames(
                        "absolute h-15 w-15 bottom-1 right-1 bg-slate-400 hover:bg-slate-500 rounded-full text-white cursor-pointer",
                        {
                          "!cursor-not-allowed": profile?.role == "user",
                        }
                      )}
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
                    </button>
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-gray-300" />

              <div className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Sold
                    </label>
                    <input
                      type="email"
                      disabled={true}
                      className="border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150 cursor-not-allowed"
                      value={curProduct?.sold || ""}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      disabled={
                        profile?.role == "admin" ||
                        profile?.role == "owner" ||
                        profile?.id == id
                          ? false
                          : true
                      }
                      className={classNames(
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150",
                        {
                          "!cursor-not-allowed":
                            profile?.role == "user" && profile?.id != id,
                        }
                      )}
                      value={formatCurrency(curProduct?.price) || ""}
                      name="price"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Quantity
                    </label>
                    <input
                      type="text"
                      disabled={
                        profile?.role == "admin" ||
                        profile?.role == "owner" ||
                        profile?.id == id
                          ? false
                          : true
                      }
                      className={classNames(
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150",
                        {
                          "!cursor-not-allowed":
                            profile?.role == "user" && profile?.id != id,
                        }
                      )}
                      value={formatCurrency(curProduct?.quantity) || ""}
                      name="quantity"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-gray-300" />

              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Product Description
                    </label>
                    <textarea
                      disabled={
                        profile?.role == "admin" ||
                        profile?.role == "owner" ||
                        profile?.id == id
                          ? false
                          : true
                      }
                      className={classNames(
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150",
                        {
                          "!cursor-not-allowed":
                            profile?.role == "user" && profile?.id != id,
                        }
                      )}
                      rows={4}
                      value={curProduct?.description || ""}
                      name="description"
                      onChange={handleChangeInput}
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-between w-full lg:w-12/12 px-4 items-baseline">
                  <span className="text-gray-400 text-xs font-extralight">
                    Edit product
                  </span>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <Button
                      className={classNames(
                        "inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400  sm:ml-3 sm:w-auto",
                        {
                          "!cursor-not-allowed !bg-gray-400 !hover:bg-gray-500":
                            disabled,
                        }
                      )}
                      contentButton="Submit"
                      disabled={disabled}
                      onClick={handleSubmit}
                    />
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setID(null)}
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
  );
}
