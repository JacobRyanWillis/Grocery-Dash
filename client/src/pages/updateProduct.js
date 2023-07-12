import React, { useState } from "react";
import Navbar from "../components/navbar";
import ChatbotIcon from "../components/chatboticon";

const UpdateProduct = () => {
  const [selectedOption, setSelectedOption] = useState("price");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="h-screen md:bg-gray-100">
      <Navbar />
      <div className="bg-white flex flex-col justify-center md:shadow-2xl md:m-10 xl:mx-96 px-6 py-12 lg:px-8 font-gilroy md:hover:shadow-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Add or Update your items
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg ">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="item-name"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                Item Name
              </label>
              <div className="mt-2">
                <input
                  id="item-name"
                  name="item-name"
                  type="text"
                  placeholder="Enter item name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="w-1/2">
                <label
                  htmlFor="quantity"
                  className="block text-xl font-medium leading-6 text-gray-900"
                >
                  Quantity
                </label>
                <div className="mt-2">
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    placeholder="Enter quantity"
                    className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  />
                </div>
              </div>
              <div className="w-1/3 md:w-1/2 mb-1">
                <div>
                  <label
                    htmlFor="option"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                  </label>
                  <select
                    id="option"
                    name="option"
                    className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                    value={selectedOption}
                    onChange={handleOptionChange}
                  >
                    <option value="price">Price</option>
                    <option value="weight">Weight</option>
                  </select>
                </div>
                {selectedOption === "price" ? (
                  <input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Enter price"
                    className="w-full block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <input
                    id="weight"
                    name="weight"
                    type="text"
                    placeholder="Enter lbs"
                    className="w-full block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select category</option>
                  <option value="Fruits and Vegetables">Fruits and Vegetables</option>
                  <option value="Meats and Seafood">Meats and Seafood</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Baked Goods">Baked Goods</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                Image URL
              </label>
              <div className="mt-2">
                <input
                  id="image"
                  name="image"
                  type="text"
                  placeholder="https://image-path"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                Item Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter item description"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs"
              >
                Update Item
              </button>
            </div>
          </form>
        </div>
      </div>
      <ChatbotIcon />
    </div>
  );
};

export default UpdateProduct;
