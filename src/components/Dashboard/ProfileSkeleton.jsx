import React from "react";

const ProfileSkeleton = () => {
  return (
    <div>
      <div className="min-h-screen animate-pulse">
        <div className="h-48 bg-linear-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative rounded-2xl">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="relative">
              <div className="w-40 h-40 bg-gray-300 dark:bg-gray-700 rounded-full border-8 border-white dark:border-gray-900"></div>
              <div className="absolute bottom-3 right-3 w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="text-center mt-20 mb-8">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-lg w-48 mx-auto"></div>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-20"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-40"></div>
                <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg w-20"></div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 mb-2"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
                </div>

                <div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24 mb-2"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-40"></div>
                </div>

                <div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-28 mb-2"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-36"></div>
                </div>

                <div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 mb-2"></div>
                  <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-full w-24"></div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-6"></div>

              <div className="space-y-5">
                <div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16 mb-2"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                </div>

                <div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-28 mb-2"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-36"></div>
                </div>

                <div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24 mb-2"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-40"></div>
                </div>

                <div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-28 mb-2"></div>
                  <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-full w-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
