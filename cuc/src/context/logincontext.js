import React, { createContext, useContext, useState } from 'react';

// Create the LoginContext
const LoginContext = createContext();

// Custom hook to use the LoginContext
export const useLogin = () => {
  return useContext(LoginContext);
};

// LoginProvider component to wrap around your app
export const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
