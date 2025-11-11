import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-150px)]'>
            <div class="loader">
    <span class="loader-text">loading</span>
      <span class="load"></span>
  </div>
        </div>
    );
};

export default Loading;