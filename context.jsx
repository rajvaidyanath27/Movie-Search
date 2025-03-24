import React, { createContext, useState, useEffect } from 'react';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.REACT_APP_API_KEY || '';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getMovies(searchTerm) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
        const data = await response.json();
        setMovies(data.Search);
        setLoading(false);
    }

    useEffect(() => {
        getMovies('Batman');
    }, []);

    return (
        <MovieContext.Provider value={{ movies, loading, getMovies }}>
            {children}
        </MovieContext.Provider>
    );
};

export { MovieProvider, MovieContext };