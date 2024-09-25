import { createContext, useState } from "react";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({name:"João Marcos", age: 21,});

  return (
    <AppContext.Provider value={{user, setUser}}>
      {children}
    </AppContext.Provider>
  );
};
