import React, { createContext, useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=6aade819&s=titanic`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
const [isLoading, setIsLoading] = useState(true); 
const [movie, setMovie] = useState([]);
const [isError, setIsError ] = useState( { show: "false", msg: ""});


  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if(data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search); 
      }else{
        setIsError({
          show: true,
          msg: data.error,
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  return <AppContext.Provider value={{isLoading, isError, movie}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppContext, AppProvider, useGlobalContext };
