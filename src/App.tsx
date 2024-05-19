import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/nav";
import AppRoutes from "./Routes";
import jsonData from "../src/data.json";

import { GlobalStateProvider } from "./context/GlobalStateContext";

const App: React.FC = () => {
  

  // const [currentPrices, setCurrentPrices] = useState<any>({});

  // const fetchData = async () => {
  //   try {
  //     const response = await getCurrentPrice(stock);
  //     // setCurrentPrices(response);
  //     console.log(response);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);

  //   }
  // };

  // useEffect(() => {
  //   fetchData(); 

  //   const interval = setInterval(fetchData, 10000); 
  //   return () => clearInterval(interval);
  // }, []);



  return (
    <GlobalStateProvider>
      <Router>
      <div>
        <Nav />
        <AppRoutes />
      </div>
    </Router>

    </GlobalStateProvider>
    
  );
};

export default App;
