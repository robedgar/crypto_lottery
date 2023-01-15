import { useMetamask } from '@thirdweb-dev/react';
import React from 'react';

function Login() {
  const connectWithMetamask = useMetamask();

  return (
    <div className=" bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
      <div className=" flex flex-col items-center mb-10">
        <img
          className=" rounded-full h-55 w-56 mb-10"
          src="https://cdn.pixabay.com/photo/2017/10/10/13/10/balls-2837123_960_720.png"
          alt=""
        />
        <h1 className="text-6xl text-white font-bold pb-2">The Crypto Lotto</h1>
        <h2 className="text-white ">
          Get Started By logging in with your MetaMask
        </h2>

        <button
          onClick={connectWithMetamask}
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
        >
          Login with MetaMask
        </button>
      </div>
    </div>
  );
}

export default Login;
