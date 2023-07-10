import React from "react";
import Navbar from "../components/navbar";
import mangos from "../assets/mangos.jpg";
import austell from "../assets/austell-market.jpg";

const VendorDashboard = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="font-gilroy grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto mt-10 max-w-6xl">
        <div className="text-3xl md:text-4xl col-span-1 mx-auto md:mx-0 md:col-span-2 font-semibold">
          <h1>Manage your Items</h1>
        </div>
        <div className="m-2 shadow-class rounded grid grid-cols-3">
          <div className="col-span-1">
            <img
              className="h-full w-auto object-cover rounded"
              src={mangos}
              alt="mangos"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center pl-4">
            <div className="flex items-center">
              <h3 className="text-xl mr-2">Mango Boys</h3>
              <span className="text-xl text-gray-500">x</span>
              <span className="text-xl ml-2">3</span>
            </div>
            <div className="flex">
              <button class="rounded-md px-3 py-1 mt-2 mr-2 text-base ring-eggplant ring-2 font-semibold leading-6 text-eggplant shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600">
                Edit
              </button>
              <button className="rounded-md bg-eggplant px-2 py-1 mt-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Remove
              </button>
            </div>
          </div>
        </div>
        {/* Add more cart items */}
      </div>
    </div>
  );
};

export default VendorDashboard;
