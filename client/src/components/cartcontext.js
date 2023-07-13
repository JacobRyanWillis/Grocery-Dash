import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    // Retrieve the cart count from local storage on component mount
    const storedCount = localStorage.getItem("cartItemsCount");
    if (storedCount) {
      setCartItemsCount(parseInt(storedCount, 10));
    }
  }, []);

  useEffect(() => {
    // Update the cart count in local storage whenever it changes
    localStorage.setItem("cartItemsCount", cartItemsCount.toString());
  }, [cartItemsCount]);

  const updateCartItemsCount = (count) => {
    setCartItemsCount(count);
  };

  return (
    <CartContext.Provider value={{ cartItemsCount, updateCartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
