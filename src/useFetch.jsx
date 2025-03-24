import React, { useState, useEffect } from "react";

// eslint-disable-next-line no-undef
export const API_URL = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}`;

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search || data);
        setIsError({ show: "false", msg: "" });
      } else {
        setIsError({ show: "true", msg: data.Error });
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setIsError({ show: "true", msg: "An error occurred." });
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&s=${apiParams}`);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [apiParams]);

  return { isLoading, isError, movie };
};

export default useFetch;
