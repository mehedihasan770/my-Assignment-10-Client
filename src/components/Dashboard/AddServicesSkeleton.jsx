import React from "react";

const AddServicesSkeleton = () => {
  return (
    <div>
      <div className="mt-10 animate-pulse">
        <div className="text-center mb-5">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-lg w-64 mx-auto"></div>
        </div>

        <div className="max-w-[700px] border border-gray-200 dark:border-gray-700 mx-auto rounded-2xl p-5">
          <div className="space-y-6">
            <div className="md:flex md:justify-between gap-4">
              <div className="w-full space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
              </div>
              <div className="w-full space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-36"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-28"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-36"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-36"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-36"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-28"></div>
              <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            </div>
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServicesSkeleton;
