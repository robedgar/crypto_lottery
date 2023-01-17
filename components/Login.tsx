import { useMetamask } from '@thirdweb-dev/react';
import { ConnectWallet } from '@thirdweb-dev/react';
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
          Get Started By logging in with your Wallet
        </h2>

        <div className=" pt-4">
          <ConnectWallet
            // Some customization of the button style
            colorMode="dark"
            accentColor="white"
          />
        </div>
        <div>
          <p className="text-white pt-4 italic">
            Polygon combines the best of Ethereum and sovereign blockchains into
            a full-fledged multi-chain system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
