import { createContext, useState } from "react";

export const CarContext = createContext(null);

// eslint-disable-next-line react/prop-types
const CarProvider = ({ children }) => {
  const [car, setCar] = useState("Camaro");

  return (
    <CarContext.Provider value={{ car, setCar }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
