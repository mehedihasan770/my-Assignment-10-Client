import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-150px)]'>
            <div className="loader">
    <span className="loader-text">loading</span>
      <span className="load"></span>
  </div>
        </div>
    );
};

export default Loading;