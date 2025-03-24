import React, { createContext, useContext, useEffect, useState } from "react";

// Change this line
const API_KEY = process.env.REACT_APP_API_KEY || "MISSING_API_KEY";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

console.log("Loaded API Key:", process.env.REACT_APP_API_KEY); // Debugging log

if (API_KEY === "MISSING_API_KEY") {
  console.error("API key is missing. Please set REACT_APP_API_KEY in your .env file.");
}


const AppContext = createContext();

const AppProvider = ({ children }) => {
const [isLoading, setIsLoading] = useState(true); 
const [movie, setMovie] = useState([]);
const [isError, setIsError ] = useState( { show: "false", msg: ""});
const [query, setQuery] = useState("titanic");


  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if(data.Response === "True") {
        setIsLoading(false);
        setIsError({
          show: false,
          msg: data.Error,
        });
        setMovie(data.Search); 
      }else{
        setIsError({
          show: true,
          msg: data.Error, 
        })
      }
    } catch (error) {
      console.log(error);
      setIsError({
        show: true,
        msg: data.Error,
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getMovies(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    }, 1000);
  }, [query]);

  return <AppContext.Provider value={{isLoading, isError, movie, query, setQuery}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
