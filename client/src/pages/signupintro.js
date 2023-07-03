import React from 'react';
// import Navbar from '../components/navbar.js';
// import VendorImage from '../assets/vendor-signup.png';

const SignupIntro = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="h-screen grid grid-cols-2">
        <div className="bg-gray-200 flex justify-center items-center">
          <div>
            <img
            //   src= {VendorImage}
              alt="Image 1"
              className="w-full h-auto"
            />
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Sign Up as a Vendor
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 flex justify-center items-center">
          <div>
            <img
            //   src={VendorImage}
              alt="Image 2"
              className="w-full h-auto"
            />
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Sign Up as a Buyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupIntro;

