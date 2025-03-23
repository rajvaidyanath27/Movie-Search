import React, { useState, createContext, useContext } from "react";


const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};


export const GlobalProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [isError, setIsError] = useState({ show: false, msg: "" });

  
  const value = {
    query,
    setQuery,
    isError,
    setIsError,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};



// const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=titanic`

