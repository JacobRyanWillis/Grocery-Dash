import React from "react";
import { Link } from 'react-router-dom';
import { GET_PUBLIC_OWNERS, GET_ALL_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Navbar from "../components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ChatbotIcon from "../components/chatboticon";

const Market = () => {
  const { data, loading, error } = useQuery(GET_PUBLIC_OWNERS);
  const userData = data?.publicOwners;
  console.log(userData)

  const { loading: loading2, data: products } = useQuery(GET_ALL_PRODUCTS);
  const productData = products?.allProducts;
  const filteredFeature = productData?.filter(
    (product) => product.feature === true
  );

  const getRandomOwner = (owners) => {
    const randomIndex = Math.floor(Math.random() * owners.length);
    return owners[randomIndex];
  };

  const getRandomFeature = (feature) => {
    const randomIndex = Math.floor(Math.random() * feature.length);
    return feature[randomIndex];
  };

  const renderSection = (category) => {
    const ownersWithCategory = userData?.filter((owner) =>
      owner.myProducts.some((product) => product.category === category)
    );
    const randomOwner = getRandomOwner(ownersWithCategory);

    return (
    <Link
        to="/shop" state={{owner:randomOwner?.myProducts}}
      >
      <div className="grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded">
        <div className="col-span-1 flex items-center">
          <img
            className="h-full w-auto rounded"
            src={randomOwner?.ownerImage}
            alt={randomOwner?.ownerName}
          />
        </div>
        <div className="col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-6 md:pl-6">
          <h3 className="text-md mb-2 text-xl md:text-2xl font-semibold">
            {randomOwner?.ownerName}
          </h3>
          <p className="md:text-lg">{category}</p>
        </div>
      </div>
    </Link>
    );
  };

  const renderCarousel = (features) => {
    const randomFeature = getRandomFeature(features)
      return (
        <div className="m-2 flex flex-col justify-center items-center">
            <img
              className="h-24 w-24 rounded-full"
              alt={randomFeature.productName}
              src={randomFeature.image}
            ></img>
            <p className="md:text-lg"> {randomFeature.productName} </p>
          </div>
      )      
  }

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };


  if (error) {
    return <p>Error: {error.message}</p>; // Render an error message if an error occurs
  }
    
  if (loading) {
    return <p>Loading...</p>; // Render a loading indicator while data is being fetched
  }

  if (loading2) {
    return <p>Loading...</p>; // Render a loading indicator while data is being fetched
  }

  return (
    <div className="font-gilroy">
      <Navbar />
      <div className="m-2 pt-8 ml-10 pl-10">
        <h1 className="text-2xl md:text-3xl"> Today's Featured Items </h1>
      </div>
      <div className="bg-light-tan">
        <Slider {...settings}>
          {renderCarousel(filteredFeature)}
          {renderCarousel(filteredFeature)}
          {renderCarousel(filteredFeature)}
          {renderCarousel(filteredFeature)}
          {renderCarousel(filteredFeature)}
        </Slider>
      </div>

      <div className="flex justify-center items-center m-2 p-8">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Austell Farmers Market
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 px-4">
        <div className="bg-cFruits m-4 p-4 shadow-class flex justify-end items-start col-span-2 lg:col-span-1 rounded">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Fruits & Vegetables
          </h2>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-4 m-4">
            {renderSection('Fruits and Vegetables')}
            {renderSection('Fruits and Vegetables')}
            {renderSection('Fruits and Vegetables')}
            {renderSection('Fruits and Vegetables')}
            
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 px-4 lg:my-12 lg:py-12">
        <div className="grid grid-rows-3 gap-4 m-2 p-2">
          <div className="bg-cMeats shadow-class flex justify-start items-start rounded p-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Meats & Seafood
            </h2>
          </div>
            {renderSection('Meats and Seafood')}
            {renderSection('Meats and Seafood')}
        </div>

        <div className="grid grid-rows-3 gap-4 m-2 p-2">
          <div className="bg-cDairy shadow-class flex justify-start items-start rounded p-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">Dairy Products</h2>
          </div>
            {renderSection('Dairy')}
            {renderSection('Dairy')}
        </div>
        <div className="grid grid-rows-3 gap-4 m-2 p-2">
          <div className="bg-cBaked shadow-class flex justify-start items-start rounded p-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">Baked Goods</h2>
          </div>
            {renderSection('Baked Goods')}
            {renderSection('Baked Goods')}
        </div>
      </div>
      <ChatbotIcon />
    </div>
  );
};

export default Market;
