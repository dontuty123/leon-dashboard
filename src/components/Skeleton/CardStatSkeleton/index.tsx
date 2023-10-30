import React from "react";

export default function CardStatSkeleton() {
  return (
    <div className="w-full max-w-md mx-auto animate-pulse">
      <h1 className="h-3 bg-gray-300 rounded-lg w-52 dark:bg-gray-600" />
      <p className="w-48 h-3 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700" />
      <p className="w-full h-3 mt-5 bg-gray-200 rounded-lg dark:bg-gray-700" />
      <p className="w-64 h-3 mt-5 bg-gray-200 rounded-lg dark:bg-gray-700" />
    </div>
  );
}
