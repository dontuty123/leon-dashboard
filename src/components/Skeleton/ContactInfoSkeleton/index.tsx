import React from "react";

interface IContactInfoSkeleton {
  rows?: number;
}
export default function ContactInfoSkeleton({
  rows = 8,
}: IContactInfoSkeleton) {
  return (
    <div role="status" className="space-y-2.5 animate-pulse  px-10">
      {Array(rows)
        .fill(0)
        .map((_, index) => (
          <div
            className="flex items-center w-full flex-grow space-x-2 mx-5"
            key={index}
          >
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
          </div>
        ))}

      
      <span className="sr-only">Loading...</span>
    </div>
  );
}
