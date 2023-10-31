import React from "react";
import NewProduct from "@/components/NewProduct";

interface IAddNewModal {
  setIsAddNewController: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export default function AddNewModal({ setIsAddNewController }: IAddNewModal) {
  return (
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
  );
}
