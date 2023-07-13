import React from "react";
import mangos from "../assets/mangos.jpg";
import { useMutation } from "@apollo/client";
import { REMOVE_FROM_CART } from "../utils/mutations";

const CartItem = ({ product }) => {
  const [removeProductFromBuyer, { error }] = useMutation(REMOVE_FROM_CART);
  const handleRemove = async (id) => {
    const { data } = await removeProductFromBuyer({
      variables: { id },
    });
    window.location.reload();
  };
  return (
    <div className="m-2 shadow-class rounded grid grid-cols-3">
      <div className="col-span-1">
        <img
          className="h-full w-auto object-cover rounded"
          src={product?.image}
          alt="mangos"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-center pl-4">
        <div className="flex items-center">
          <h3 className="text-xl mr-2">{product?.productName}</h3>
          <span className="text-xl text-gray-500">x</span>
          <span className="text-xl ml-2">1</span>
        </div>
        <button
          onClick={() => handleRemove(product._id)}
          className="rounded-md bg-eggplant px-2 py-1 mt-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs self-start"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
