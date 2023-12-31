import React, { useState, useEffect, useContext } from "react";
import { ADD_TO_CART } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { CartContext } from "./cartcontext";
import auth from "../utils/auth";

const SingleProduct = ({ product }) => {
  const { updateCartItemsCount, cartItemsCount } = useContext(CartContext);
  const [addProductToBuyer, { error }] = useMutation(ADD_TO_CART);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) {
      return;
    }
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }, [added]);

  const handleToCart = async (id) => {
    if (!auth.loggedIn()) {
      // Check if user is not logged in
      window.location.assign("/buyerlogin"); // Redirect to the login page
      return;
    }

    const { data } = await addProductToBuyer({
      variables: { id },
    });

    if (error) {
      console.log(error);
    } else {
      setAdded(true);
      updateCartItemsCount(cartItemsCount + 1);
    }
  };

  // Check if the product is defined before accessing its properties
  if (!product) {
    return null; // or return a placeholder component/message
  }

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
        {added ? <p>Added To Cart!</p> : null}
      </div>
    </div>
  );
};

export default SingleProduct;
