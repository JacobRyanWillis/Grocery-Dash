import React from "react";
import Navbar from "../components/navbar";
import mangos from "../assets/mangos.jpg";
import ChatbotIcon from '../components/chatboticon';
import { useLocation } from "react-router-dom";


const Shop = () => {
  const location = useLocation();
  const {owner}=location.state || [];
  console.log(owner)
  return (
    <div>
      <Navbar />
      <div className="font-gilroy grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        <div className="flex flex-col justify-center items-center md:items-start col-span-full lg:col-start-2  mx-8 mt-5 md:mt-20">
          <h1 className="text-5xl font-bold my-2">Mango Boys</h1>
          <p className="text-xl my-2">Specialties: Fruits and Vegetables</p>
        </div>
        <div className="col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1 md:text-7xl">
          <div className="p-6">
            <label htmlFor="category" className="text-lg font-semibold">
              Category:
            </label>
            <select
              id="category"
              className="block w-full mt-1 p-2 rounded-md border-gray-400 bg-white focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">All Categories </option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="p-6">
            <label htmlFor="vendor" className="text-lg font-semibold">
              Vendor:
            </label>
            <select
              id="vendor"
              className="block w-full mt-1 p-2 rounded-md border-gray-400 bg-white focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value=""> All Vendors</option>
              <option value="vendor1">Vendor 1</option>
              <option value="vendor2">Vendor 2</option>
              <option value="vendor3">Vendor 3</option>
            </select>
          </div>
        </div>
        <div className="col-span-full md:col-span-2 lg:col-span-3 xl:col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="m-6 flex flex-col rounded shadow-class h-full">
              <img
                className="h-full w-full object-cover rounded-t"
                alt="mangos"
                src={mangos}
              />
              <div className="flex flex-col justify-center space-y-8 p-4 h-full">
                <p className="md:text-lg ">Fresh Mangos</p>
                <p className="md:text-lg ">$2/lb</p>
                <button className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="m-6 flex flex-col rounded shadow-class h-full">
              <img
                className="h-full w-full object-cover rounded-t"
                alt="mangos"
                src={mangos}
              />
              <div className="flex flex-col justify-center space-y-8 p-4 h-full">
                <p className="md:text-lg ">Fresh Mangos</p>
                <p className="md:text-lg ">$2/lb</p>
                <button className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="m-6 flex flex-col rounded shadow-class h-full">
              <img
                className="h-full w-full object-cover rounded-t"
                alt="mangos"
                src={mangos}
              />
              <div className="flex flex-col justify-center space-y-8 p-4 h-full">
                <p className="md:text-lg ">Fresh Mangos</p>
                <p className="md:text-lg ">$2/lb</p>
                <button className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="m-6 flex flex-col rounded shadow-class h-full">
              <img
                className="h-full w-full object-cover rounded-t"
                alt="mangos"
                src={mangos}
              />
              <div className="flex flex-col justify-center space-y-8 p-4 h-full">
                <p className="md:text-lg ">Fresh Mangos</p>
                <p className="md:text-lg ">$2/lb</p>
                <button className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="m-6 flex flex-col rounded shadow-class h-full">
              <img
                className="h-full w-full object-cover rounded-t"
                alt="mangos"
                src={mangos}
              />
              <div className="flex flex-col justify-center space-y-8 p-4 h-full">
                <p className="md:text-lg ">Fresh Mangos</p>
                <p className="md:text-lg ">$2/lb</p>
                <button className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatbotIcon />
    </div>
  );
};

export default Shop;
