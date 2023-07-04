import React from "react";
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Logo from '../components/logo';

const BuyerSignUp = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <div class="bg-white flex flex-col justify-center md:shadow-2xl md:m-10 xl:mx-96 px-6 py-12 lg:px-8 font-gilroy md:hover:shadow-xl">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
          <Logo />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for a Consumer Account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-lg ">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="username"
                class="block text-md font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div class="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autocomplete="username"
                  placeholder="Enter your username"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-md font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  placeholder="Enter your e-mail address"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-md font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-semi-bold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  placeholder="Enter your password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Did you mean Vendor?
            <a
              href="#"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
            <Link to="/vendorsignup">
                Click Here
            </Link>
            </a>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default BuyerSignUp;
