// import React, { useState, createContext, useContext } from "react";



// export const GlobalProvider = ({ children }) => {
//   const [query, setQuery] = useState("");
//   const [isError, setIsError] = useState({ show: false, msg: "" });

//   const value = {
//     query,
//     setQuery,
//     isError,
//     setIsError,
//   };

//   return (
//     <GlobalContext.Provider value={value}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

import React, {useContext} from "react"; 

const AppContext = React.createContext(); 


const AppProvider = ({ children }) => { 
  return <AppContext.Provider value="thapa">{children}</AppContext.Provider>; 
}; 


 const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

