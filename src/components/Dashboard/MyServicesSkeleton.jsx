import React from 'react';

const MyServicesSkeleton = () => {
    return (
        <div>
            <table className="table w-full min-w-[600px] animate-pulse">
    <thead>
      <tr>
        <th className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></th>
        <th className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32"></th>
        <th className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></th>
        <th className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-28"></th>
        <th className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20"></th>
        <th className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20"></th>
      </tr>
    </thead>
    <tbody>
        {[...Array(10)].map((_, index) => (
      <tr key={index} className='hover:shadow-lg duration-400'>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>
        </td>
        <td className="tebel">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-40"></div>
        </td>
        <td className="tebel">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-lg w-20"></div>
        </td>
        <td className="tebel">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
        </td>
        <td>
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg w-16"></div>
        </td>
        <td>
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg w-20"></div>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
        </div>
    );
};

export default MyServicesSkeleton;