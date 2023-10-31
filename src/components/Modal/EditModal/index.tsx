import EditProductController from "@/components/Edit/EditProductController";
import EditUserController from "@/components/Edit/EditUserController";
import React from "react";

interface IEditModal {
  currentModal: string | undefined;
  editID: string;
  setEditID: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}

export default function EditModal({
  currentModal,
  editID,
  setEditID,
}: IEditModal) {
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
          {currentModal == "products" ? (
            <EditProductController id={editID} setID={setEditID} />
          ) : (
            <EditUserController id={editID} setID={setEditID} />
          )}
        </div>
      </div>
    </div>
  );
}
