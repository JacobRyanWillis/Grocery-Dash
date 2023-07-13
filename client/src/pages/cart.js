import React from "react";
import Navbar from "../components/navbar";
import { useQuery } from "@apollo/client";
import mangos from "../assets/mangos.jpg";
import CartItem from "../components/CartItem";
import ChatbotIcon from '../components/chatboticon';
import { BUYER_ME } from "../utils/queries";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const {loading, data} = useQuery(BUYER_ME)
  const buyerData = data?.buyerMe
  console.log(buyerData)
  
  return (
    <div className="h-screen">
      <Navbar />
      <div className="font-gilroy grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto mt-10 max-w-6xl">
        {loading? (<p> Cart is loading</p>) : (
          buyerData?.myList.map((product) => <CartItem product = {product}/>)
        )}
      </div>
      <div className="flex flex-col justify-center items-center m-2 p-2">
        <h2 className="text-2xl md:text-3xl"> Sub-total: </h2>
        <button className="rounded-md bg-grass px-2 py-1 mt-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs">
          Check-out
        </button>
      </div>
      <ChatbotIcon />
    </div>
  );
};

export default Cart;
