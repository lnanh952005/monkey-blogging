import { createContext, useContext, useState } from "react";

const authContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const value = { user, setUser };
  return (
    <authContext.Provider value={value} {...props}></authContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(authContext);
  return context;
};

export { AuthProvider, useAuthContext };
