import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.js';

const SignupIntro = () => {

  return (
    <div className='h-screen'>
      <Navbar />
      <div className='text-4xl bg-light-tan md:text-5xl font-semi-bold flex justify-center items-center m-5 p-5 font-gilroy'>
        Create your account
      </div>
      <div className='h-[calc(100vh-15rem)] grid grid-cols-1 md:grid-cols-2 font-gilroy gap-6 m-2 p-2 '>
        <div className='flex justify-center items-center bg-no-repeat bg-center bg-cover rounded bg-vendorImage brightness-50 hover:brightness-100'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold mb-4 text-white'>Sell your items</h1>
            <button className='bg-grass hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'>
              <Link to="/vendorsignup">
                Sign Up as a Vendor
              </Link>
            </button>
          </div>
        </div>
        <div className='flex justify-center items-center bg-no-repeat bg-center bg-cover rounded bg-buyerImage brightness-50 hover:brightness-100' >
          <div className='text-center'>
            <h1 className='text-3xl font-bold mb-4 text-white'>Shop around</h1>
            <button className='bg-eggplant hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'>
              <Link to="/buyersignup">
                Sign Up as a Buyer
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupIntro;
