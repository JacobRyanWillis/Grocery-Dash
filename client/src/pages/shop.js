import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PUBLIC_OWNERS, GET_ALL_PRODUCTS} from "../utils/queries";
import Navbar from "../components/navbar";
import mangos from "../assets/mangos.jpg";
import ChatbotIcon from "../components/chatboticon";
import Select from "react-select";
import { useLocation } from "react-router-dom";


const Shop = () => {
  const location = useLocation();
  const {owner}=location.state || [];

  const { loading: pLoading, data } = useQuery(GET_ALL_PRODUCTS);
  const productData = data?.allProducts;

  const { loading: oLoading, data: owners } = useQuery(GET_PUBLIC_OWNERS);
  const ownersData = owners?.publicOwners;

  const [displayedProducts, setDisplayedProducts] = useState(owner);

  const renderItems = (product) => {
    return (
      <div className="m-6 flex flex-col rounded shadow-class h-full">
        <img
          className="h-full w-full object-cover rounded-t"
          alt="mangos"
          src={mangos}
        />
        <div className="flex flex-col justify-center space-y-8 p-4 h-full">
          <p className="md:text-lg ">{product.productName}</p>
          <p className="md:text-lg ">${product.price}</p>
          <button className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "fruits and vegetables", label: "Fruits and Vegetables" },
    { value: "meats and seafood", label: "Meats and Seafood" },
    { value: "baked goods", label: "Baked Goods" },
  ];

  const handleCategories = (selectedOption) => {
    if (selectedOption.value == "all") {
      return setDisplayedProducts(productData);
    }
    const filteredProducts = productData?.filter(
      (product) => product.category == selectedOption.value
    );
    setDisplayedProducts(filteredProducts);
  };

  const vendors = () => {
    console.log(ownersData)
    const filteredVendors = ownersData?.map(
      (owner) => {return {value: `${owner.ownerName}`, label: `${owner.ownerName}`}} 
    )
    console.log(filteredVendors)
    return filteredVendors
  }
  const vendorOptions = vendors()

  const handleVendors = (selectedOption) => {
    const vendor = ownersData?.filter(
      (owner) => owner.ownerName == selectedOption.value
    );
    console.log(vendor)
    setDisplayedProducts(vendor[0].myProducts);
  };

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
            <Select
              options={categoryOptions}
              id="category"
              onChange={handleCategories}
              className=" text-sm block w-full mt-1 p-2 rounded-md border-gray-400 bg-white focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="p-6">
            <label htmlFor="vendor" className="text-lg font-semibold">
              Vendor:
            </label>
            <Select
              options={vendorOptions}
              id="vendor"
              onChange={handleVendors}
              className="text-sm block w-full mt-1 p-2 rounded-md border-gray-400 bg-white focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="col-span-full md:col-span-2 lg:col-span-3 xl:col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pLoading ? (
              <p> Products are loading</p>
            ) : (
              displayedProducts?.map((product) => renderItems(product))
            )}
          </div>
        </div>
      </div>
      <ChatbotIcon />
    </div>
  );
};

export default Shop;
