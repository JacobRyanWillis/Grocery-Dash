import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Navbar from "../components/navbar";
import ChatbotIcon from "../components/chatboticon";
import { PRODUCT_BY_ID } from "../utils/queries";
import { UPDATE_PRODUCT } from "../utils/mutations";
import { useLocation } from "react-router-dom";
import Loading from "../components/loading";

const UpdateProduct = () => {
  const [selectedOption, setSelectedOption] = useState("price");

  const location = useLocation();
  const productId = location.state?.productId;

  const { loading: queryLoading, error: queryError, data } = useQuery(
    PRODUCT_BY_ID,
    {
      variables: { id:productId },
    }
  );
  console.log(data);
  const [formState, setFormState] = useState({
    _id: "",
    productName: "",
    description: "",
    category: "",
    price: null,
    weight: null,
    quantity: null,
    image: "",
    feature: false,
  });
  
  useEffect(() => {
    if (data && data.productById) {
      const productData = data.productById;
      setFormState({
        _id: productData._id,
        productName: productData.productName,
        description: productData.description,
        category: productData.category,
        price: productData.price,
        weight: productData.weight,
        quantity: productData.quantity,
        image: productData.image,
        feature: productData.feature,
      });
    }
  }, [data]);


  const [updateProduct, { loading, error }] = useMutation(UPDATE_PRODUCT);

  const handleChange = (event) => {
    const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
  };

  const handleSubmit = async (event) => {
    console.log(formState);
    event.preventDefault();
  
    try {
      const { data } = await updateProduct({
        variables: {
          id: formState._id,
          productName: formState.productName,
          description: formState.description,
          category: formState.category,
          price: parseFloat(formState.price),
          weight: parseInt(formState.weight),
          quantity: parseInt(formState.quantity),
          image: formState.image,
          feature: formState.feature,
        },
      });
  
      // Handle the response data if needed
      window.location.assign("/dashboard")
      console.log(data);
    } catch (error) {
      // Handle the error if needed
      console.error(error);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCategoryChange = (event) => {
    const { value } = event.target;
  
    setFormState((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  // Render loading state
  if (loading) {
    return <Loading/>;
  }
  
  // Render error state
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="h-screen md:bg-gray-100">
      <Navbar />
      <div className="bg-white flex flex-col justify-center md:shadow-2xl md:m-10 xl:mx-96 px-6 py-12 lg:px-8 font-gilroy md:hover:shadow-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Update your item
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg ">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  name="productName"
                  type="text"
                  placeholder="Enter item name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  value={formState.productName}
                  onChange={handleChange}
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
                    type="number"
                    placeholder="Enter quantity"
                    className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                    value={formState.quantity}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-1/3 md:w-1/2 mb-1">
                <div>
                  <label
                    htmlFor="option"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  ></label>
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
                    type="number"
                    placeholder="Enter price"
                    className="w-full block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                    value={formState.price}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    id="weight"
                    name="weight"
                    type="number"
                    placeholder="Enter lbs"
                    className="w-full block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                    value={formState.weight}
                    onChange={handleChange}   
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
                  value={formState.category}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select category</option>
                  <option value="Fruits and Vegetables">
                    Fruits and Vegetables
                  </option>
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
                  value={formState.image}
                  onChange={handleChange}
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
                  value={formState.description}
                  onChange={handleChange}
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
