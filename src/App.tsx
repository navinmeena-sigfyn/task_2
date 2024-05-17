import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/nav";
import AppRoutes from "./Routes";
import { GlobalProvider } from "./context/GlobalContextProvider";
import jsonData from "../src/data.json";
import { useGlobalContext } from './context/GlobalContext';
import { getCurrentPrice } from "./functions/GetCurrentPrice";

const stock: string[] = jsonData.map((holding) => String(holding.AssetId));




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
    <GlobalProvider>
      <Router>
      <div>
        <Nav />
        <AppRoutes />
      </div>
    </Router>

    </GlobalProvider>
    
  );
};

export default App;
