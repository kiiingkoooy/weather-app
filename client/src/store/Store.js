import { useContext, useState } from "react";
import React from "react";

export const Login = React.createContext();
export const Loading = React.createContext();

export function useLogin() {
  return useContext(Login);
}

export function useLoading() {
  return useContext(Loading);
}

const Store = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Login.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Loading.Provider value={{ loading, setLoading }}>
        {children}
      </Loading.Provider>
    </Login.Provider>
  );
};

export default Store;
