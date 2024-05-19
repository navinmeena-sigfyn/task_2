import React, { useEffect } from 'react';
import { useGlobalState } from '../context/GlobalStateContext';
import { setData } from '../context/Action';
import { Link } from 'react-router-dom';
import { getCurrentPrice } from '../functions/GetCurrentPrice';
import jsonData from '../data.json';


const stock: string[] = jsonData.map((holding) => String(holding.AssetId));

const HomePage: React.FC = () => {
  const { state, dispatch } = useGlobalState();

  const fetchData = async () => {
    try {
      const response = await getCurrentPrice(stock);
      dispatch(setData(response)); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <h1>1st Page</h1>
      <p>Global Data: {JSON.stringify(state.data)}</p>
      <br />
      <Link to="/about">Go to 2 nd Page</Link>
    </div>
  );
};

export default HomePage;
