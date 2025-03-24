import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use BrowserRouter
// import { GlobalProvider } from "./context";
import { AppProvider } from "./context"; // Corrected import path
import "./App.css";


import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Search from "./Search";  
import "./App.css";

const App = () => {
  return (
    <AppProvider>  
      <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovie />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
