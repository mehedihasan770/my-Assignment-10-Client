import React from "react";

const Skeleton = () => {
  return (
    <div className="min-h-screen p-4 md:p-6 space-y-6">
      <div className="text-center mb-8 animate-pulse">
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-lg w-48 mx-auto mb-3"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-lg w-40 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
              </div>
              <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-pulse">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-2 mb-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg w-24"
              ></div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-6"></div>
          <div className="h-80 bg-gray-200 dark:bg-gray-900 rounded-lg"></div>
        </div>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-6"></div>
            <div className="h-64 bg-gray-200 dark:bg-gray-900 rounded-lg"></div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-6"></div>
            <div className="h-64 bg-gray-200 dark:bg-gray-900 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-pulse">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-6"></div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                {[...Array(5)].map((_, index) => (
                  <th key={index} className="px-4 py-3 text-left">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[...Array(5)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(5)].map((_, colIndex) => (
                    <td key={colIndex} className="px-4 py-3">
                      <div className="h-4 bg-gray-200 dark:bg-gray-900 rounded w-full"></div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
