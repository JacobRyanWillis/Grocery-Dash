import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FaSpinner className="text-5xl animate-spin" />
      <p className="text-2xl font-semibold mt-4">Loading...</p>
    </div>
  );
};

export default LoadingComponent;
