import { createContext, useState } from "react";

export const BikeContext = createContext();

export const BikeProvider = ({ children }) => {
  const [itemCart, setItemCart] = useState(0);
  const handleCart = () => {
    setItemCart(itemCart + 1);
  };
  return (
    <BikeContext.Provider value={{ itemCart, handleCart }}>
      {children}
    </BikeContext.Provider>
  );
};
