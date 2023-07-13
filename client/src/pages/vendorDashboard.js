import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { OWNER_ME, PRODUCT_BY_OWNER } from "../utils/queries";
import { DELETE_PRODUCT} from "../utils/mutations";
import Navbar from "../components/navbar";
import ChatbotIcon from "../components/chatboticon";
import Loading from "../components/loading";

const VendorDashboard = () => {
    const { loading: ownerLoading, error: ownerError, data: ownerData } = useQuery(
      OWNER_ME
    );
  
    const [ownerProducts, setOwnerProducts] = useState([]);
  
    const { loading: productLoading, error: productError, data: productData } = useQuery(
      PRODUCT_BY_OWNER,
      {
        variables: { ownerId: ownerData?.ownerMe?._id },
        skip: !ownerData?.ownerMe?._id, // Skip the query if ownerId is not available
      }
    );

    const [deleteProduct] = useMutation(DELETE_PRODUCT, {
      onCompleted: () => {
        // Refetch the products after deletion
        window.location.reload();
      },
    });
    
    const handleRemoveProduct = (productId) => {
      // Call the deleteProduct mutation with the productId
      deleteProduct({
        variables: { _id: productId },
      });
    };
  
    useEffect(() => {
      if (productData && productData.productsByOwner) {
        setOwnerProducts(productData.productsByOwner.myProducts);
      }
    }, [productData]);
  
    if (ownerLoading || productLoading) {
      return <Loading/>;
    }
  
    if (ownerError || productError) {
      return <div>Error: {ownerError?.message || productError?.message}</div>;
    }

  return (
    <div className="h-screen">
      <Navbar />
      <div className="font-gilroy grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto mt-10 max-w-6xl">
        <div className="text-3xl md:text-4xl col-span-1 mx-auto md:mx-0 md:col-span-2 font-semibold">
          <h1>Manage your Items</h1>
        </div>
        <div className="col-span-1 md:col-span-2 mx-auto md:mx-0">
          <Link to='/addproduct'>
          <button className="rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-40">
            Add Item
          </button> 
          </Link>
        </div>
        {ownerProducts.map((product) =>
        <div className="m-2 shadow-class rounded grid grid-cols-3">
          <div className="col-span-1">
            <img
              className="h-full w-auto object-cover rounded"
              src={product.image}
              alt={product.productName}
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center pl-4">
            <div className="flex items-center">
              <h3 className="text-xl mr-2">{product.productName}</h3>
              <span className="text-xl text-gray-500">x</span>
              <span className="text-xl ml-2">{product.quantity}</span>
            </div>
            <div className="flex">
              <button className="rounded-md px-3 py-1 mt-2 mr-2 text-base ring-eggplant ring-2 font-semibold leading-6 text-eggplant shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600">
                Edit
              </button>
              <button onClick={() => handleRemoveProduct(product._id)} className="rounded-md bg-eggplant px-2 py-1 mt-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Remove
              </button>
              <span className="text-md md:text-xl mx-auto flex items-center"> Price: ${product.price}</span>
            </div>
          </div>
        </div>
        )}
      </div>
      <ChatbotIcon />
    </div>
  );
};

export default VendorDashboard;
