import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Logo from "../components/logo";

import { useMutation } from "@apollo/client";
import { LOGIN_OWNER } from "../utils/mutations";
import ChatbotIcon from '../components/chatboticon';


import Auth from "../utils/auth";

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    
    const [login, { error }] = useMutation(LOGIN_OWNER)
    
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.loginOwner.token, 'owner');
        window.location.assign('/dashboard');
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

  return (
    <div className="h-screen md:bg-gray-100">
      <Navbar />
      <div className="bg-white flex flex-col justify-center md:shadow-2xl md:m-10 xl:mx-96 px-6 py-12 lg:px-8 font-gilroy md:hover:shadow-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
          <Logo />
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Owner Login
          </h2>
        </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg ">
            <form onSubmit={handleFormSubmit} className="space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block text-xl font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    placeholder="Enter your e-mail address"
                    value={formState.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-lg">
                    <a
                      href="#"
                      className="font-semi-bold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    placeholder="Enter your password"
                    value={formState.password}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs"
                >
                  Log in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-lg text-gray-500">
              Did you want to Signup?
              <div className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                <Link to="/signupintro">Click Here</Link>
              </div>
            </p>
            <p className="mt-2 text-center text-lg text-gray-500 flex flex-col">
              If you are a Buyer
              <button className="text-white font-semibold leading-6 bg-grass max-w-lg mx-auto p-2 m-2 transition-transform transform hover:scale-110">
                <Link to="/buyerlogin">Click Here</Link>
              </button>
            </p>
          </div>
        {error && (
          <div className="my-3 p-3 flex justify-center items-center">{error.message}</div>
        )}
      </div>
      <ChatbotIcon />
    </div>
  );
};

export default Login;
