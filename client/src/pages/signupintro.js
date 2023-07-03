import React from 'react';
import Navbar from '../components/navbar.js';
import VendorImage from '../assets/VendorImage.png';
import BuyerImage from '../assets/BuyerImage.png';

const SignupIntro = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen grid grid-cols-2 font-gilroy">
        <div className="bg-gray-200 flex justify-center items-center relative brightness-50 hover:brightness-100">
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${VendorImage})` }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className='text-3xl text-white m-2'> Sell your items </h1>
            <button className="bg-grass hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Sign Up as a Vendor
            </button>
          </div>
        </div>
        <div className="bg-gray-300 flex justify-center items-center relative brightness-50 hover:brightness-100">
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${BuyerImage})` }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className='text-3xl text-white m-2'>Shop around</h1>
            <button className="bg-white hover:bg-gray-600 text-eggplant font-bold py-2 px-4 rounded">
              Sign Up as a Buyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupIntro;
