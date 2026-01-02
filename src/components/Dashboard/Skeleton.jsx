import React from 'react';

const Skeleton = () => {
    return (
        <div className="px-3 py-3 md:px-0 md:max-w-10/12 mx-auto">
  <main className="flex gap-5 min-h-screen relative">

    <aside className="fixed lg:static inset-y-0 left-0 z-50 w-64">
      <div className="flex flex-col shadow bg-white/5 h-full py-5 rounded-2xl">

        <div className="absolute top-4 right-4 lg:hidden">
          <div className="w-8 h-8 bg-gray-400/50 rounded-lg animate-pulse" />
        </div>
        <div className="flex items-center justify-center pb-6 border-b border-gray-200 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-400/50 rounded animate-pulse" />
            <div className="w-32 h-8 bg-gray-400/50 rounded animate-pulse" />
          </div>
        </div>

        <nav className="flex-1 px-6 overflow-y-auto">
          <div className="mb-8">
            <div className="w-24 h-4 bg-gray-400/50 rounded animate-pulse mb-4" />
            <ul className="space-y-3">
              {[1, 2, 3].map((i) => (
                <li key={i}>
                  <div className="flex items-center space-x-4 px-4 py-3 rounded-lg bg-gray-400/20 animate-pulse">
                    <div className="w-5 h-5 bg-gray-400/50 rounded animate-pulse" />
                    <div className="w-36 h-6 bg-gray-400/50 rounded animate-pulse" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>

    <div className="space-y-5 w-full">

      <div className="flex items-center justify-between p-5 rounded-2xl shadow bg-white/5">
 
        <div className="lg:hidden">
          <div className="w-10 h-10 bg-gray-400/50 rounded-lg animate-pulse" />
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="w-32 h-5 bg-gray-400/50 rounded animate-pulse mb-1" />
              <div className="w-40 h-4 bg-gray-400/50 rounded animate-pulse" />
            </div>
            <div className="w-10 h-10 bg-gray-400/50 rounded-full animate-pulse" />
            <div className="w-4 h-4 bg-gray-400/50 rounded animate-pulse" />
          </div>
        </div>
      </div>


      <div className="bg-white/5 w-full shadow p-5 rounded-2xl">
        <div className="space-y-6">
          <div className="w-64 h-8 bg-gray-400/50 rounded animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 space-y-4">
                <div className="w-full h-48 bg-gray-400/50 rounded-xl animate-pulse" />
                <div className="w-48 h-6 bg-gray-400/50 rounded animate-pulse" />
                <div className="w-32 h-5 bg-gray-400/50 rounded animate-pulse" />
                <div className="w-24 h-8 bg-gray-400/50 rounded-lg animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
    );
};

export default Skeleton;