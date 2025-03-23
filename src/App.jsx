import React from "react";
import {  Routes, Route } from "react-router-dom";  
// import { GlobalProvider } from "./context";  
import Home from "./Home";
import SingleMovie from "./SingleMovie";
// import Search from "./Search";  
// import "./App.css";
import Error from "./Error";

const App = () => {
  return (
    // <GlobalProvider>  
      // <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovie />} />
          <Route path='*' element={<Error />} />
        </Routes>
      // </BrowserRouter>
    // </GlobalProvider>
  );
};

export default App;
