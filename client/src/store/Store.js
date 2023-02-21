import { useContext, useState } from "react";
import React from "react";

export const Login = React.createContext();

export function useLogin() {
  return useContext(Login);
}

const Store = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <Login.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </Login.Provider>
  );
};

export default Store;
