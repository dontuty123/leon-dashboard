"use client";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Button from "@/components/Button";
import { useParams } from "next/navigation";
import { onValue, update, ref as refDB } from "firebase/database";
import { db, storageDB } from "server/firebase";
import { saveProfileToLS } from "@/utils/auth";
import { AppContext } from "@/context/app.context";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import classNames from "classnames";

const initialProfile = {
  address: "",
  avatar: "",
  country: "",
  createAt: 0,
  description: "",
  email: "",
  name: "",
  phone: "",
  role: "user",
  zipcode: "",
};

export default function EditUserController() {
  const { profile, setProfile } = useContext(AppContext);
  const [curProfile, setCurProfile] = useState<IUser>(initialProfile);
  const [file, setFile] = useState<File>();
  const [disabled, setDisabled] = useState<boolean>(false);
  const previewImg = useMemo(() => {
    return file ? URL.createObjectURL(file) : "";
  }, [file]);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const { id } = useParams();

  useEffect(() => {
    const getcurProfile = refDB(db, "users/" + id);
    onValue(getcurProfile, (snapshot) => {
      const data = snapshot.val();
      setCurProfile(data);
    });
  }, [id]);

  const handleChangeInput = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLSelectElement>) => {
    setCurProfile({
      ...curProfile,
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
      const storagePath = "profile/" + file.name;
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

            const newProfile = {
              ...curProfile,
              avatar: downloadURL,
            };

            update(refDB(db, "users/" + id), newProfile);

            // nếu sửa thông tin của bản thân thì save lại trên local storage và app context
            if (profile?.id == id) {
              setProfile(newProfile);
              saveProfileToLS(newProfile);
            }
          });
        }
      );
      toast.success("Sửa thông tin thành công");
      toast.clearWaitingQueue();
    } else {
      update(refDB(db, "users/" + id), curProfile);
      if (profile?.id == id) {
        setProfile(curProfile);
        saveProfileToLS(curProfile);
      }
      toast.success("Sửa thông tin thành công");
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
              <h6 className="text-gray-700 text-xl font-bold">
                {curProfile?.name}&apos;s account
              </h6>
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
                User Information
              </h6>
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-6/12 px-4 flex flex-col">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Full Name
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
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150",
                        {
                          "!cursor-not-allowed": profile?.role == "user" && profile?.id != id,
                        }
                      )}
                      value={curProfile?.name || ""}
                      name="name"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      disabled={
                        profile?.role == "admin" ||
                        profile?.role == "owner" ||
                        profile?.id == id
                          ? false
                          : true
                      }
                      className={classNames(
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150",
                        {
                          "!cursor-not-allowed": profile?.role == "user" && profile?.id != id,
                        }
                      )}
                      value={curProfile?.email || ""}
                      name="email"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div className="  w-full h-fit lg:w-6/12 px-4 flex justify-center">
                  <div className="relative">
                    <img
                      className=" w-40 h-40 rounded-full shadow-lg"
                      src={
                        previewImg
                          ? previewImg ||
                            "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg"
                          : curProfile?.avatar ||
                            "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg"
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

              <hr className="mt-6 border-b-1 border-gray-300" />

              <div className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address
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
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150",
                        {
                          "!cursor-not-allowed": profile?.role == "user" && profile?.id != id,
                        }
                      )}
                      value={curProfile?.address || ""}
                      name="address"
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
                      Role
                    </label>
                    <select
                      className={classNames(
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150 cursor-pointer",
                        {
                          "!cursor-not-allowed": profile?.role != "owner",
                        }
                      )}
                      name="role"
                      disabled={profile?.role != "owner" ? true : false}
                      value={curProfile?.role}
                      onChange={handleChangeInput}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="owner">Owner</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone
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
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150",
                        {
                          "!cursor-not-allowed": profile?.role == "user" && profile?.id != id,
                        }
                      )}
                      value={curProfile?.phone || ""}
                      name="phone"
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
                      Postal Code
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
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150",
                        {
                          "!cursor-not-allowed": profile?.role == "user" && profile?.id != id,
                        }
                      )}
                      value={curProfile?.zipcode || ""}
                      name="zipcode"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-gray-300" />

              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About Me
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      About me
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
                        "border-none px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-400 w-full ease-linear transition-all duration-150",
                        {
                          "!cursor-not-allowed": profile?.role == "user" && profile?.id != id,
                        }
                      )}
                      rows={4}
                      value={curProfile?.description || ""}
                      name="description"
                      onChange={handleChangeInput}
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-between w-full lg:w-12/12 px-4 items-baseline">
                  <span className="text-gray-400 text-xs font-extralight">
                    Edit curProfile
                  </span>
                  <Button
                    className={classNames(
                      "bg-blue-500 text-white w-[30%] mt-5 py-3 hover:bg-blue-400 cursor-pointer hover:border rounded-md",
                      {
                        "!cursor-not-allowed !bg-gray-400 !hover:bg-gray-500":
                          disabled,
                      }
                    )}
                    contentButton="Submit"
                    disabled={disabled}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
