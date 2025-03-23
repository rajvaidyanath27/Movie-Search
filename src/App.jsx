import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Import BrowserRouter
import { GlobalProvider } from "./context";  // Import the context provider
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Search from "./Search";  // Import the Search component
import "./App.css";

const App = () => {
  return (
    <GlobalProvider>  {/* Wrap everything with GlobalProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
