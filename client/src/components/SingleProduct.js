import React, { useState, useEffect } from "react";
import { ADD_TO_CART } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { CartContext } from "./cartcontext";


const SingleProduct = ({ product }) => {
  const { updateCartItemsCount, cartItemsCount } = useContext(CartContext)
  console.log(product);
  const [addProductToBuyer, { error }] = useMutation(ADD_TO_CART);
  const [added, setAdded] = useState(false);
  useEffect(() => {
    if(!added){return}
    setTimeout(()=> {
        setAdded(false)
    }, 2000)
  }, [added]);
  const handleToCart = async (id) => {
    const { data } = await addProductToBuyer({
      variables: { id },
    });
    error ? console.log(error) : setAdded(true)
    updateCartItemsCount(cartItemsCount + 1);
  };

  return (
    <div className="m-6 flex flex-col rounded shadow-class h-full">
      <img
        className="h-full w-full object-cover rounded-t"
        alt="mangos"
        src={product.image}
      />
      <div className="flex flex-col justify-center space-y-8 p-4 h-full">
        <p className="md:text-lg ">{product.productName}</p>
        <p className="md:text-lg ">${product.price}</p>
        <button
          onClick={() => handleToCart(product._id)}
          className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs"
        >
          Add to Cart
        </button>
        {added ? <p>Added To Cart!</p> : <></>}{" "}
      </div>
    </div>
  );
};

export default SingleProduct;
