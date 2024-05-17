import jsonData from "../src/data.json";
import { getCurrentPrice } from "./functions/GetCurrentPrice";
import React, { useState, useEffect } from "react";

const stock: string[] = jsonData.map((holding) => String(holding.AssetId));

const App: React.FC = () => {
  const [currentPrices, setCurrentPrices] = useState<any>({});

  const fetchData = async () => {
    try {
      const response = await getCurrentPrice(stock);
      setCurrentPrices(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchData(); 

    const interval = setInterval(fetchData, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>JSON Data</h1>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      <h2>Current Prices</h2>
      <pre>{JSON.stringify(currentPrices, null, 2)}</pre>
    </div>
  );
};

export default App;
