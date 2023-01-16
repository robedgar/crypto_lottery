import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        <img
          className="rounded-full h-22 w-20"
          src="https://cdn.pixabay.com/photo/2017/10/10/13/10/balls-2837123_960_720.png"
          alt=""
        />
        <h1 className="text-lg text-white font-bold">
          Loading the Crypto Lotto
        </h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  );
}

export default Loading;
