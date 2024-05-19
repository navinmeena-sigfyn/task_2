// import React, { useState, useEffect } from 'react';
// import { useGlobalContext } from '../context/GlobalContext';
// import { getCurrentPrice } from '../functions/GetCurrentPrice';
// import jsonData from '../data.json';
// import { useGlobalState } from '../context/GlobalStateContext';
// import { setData } from '../context/Action';


// const stock: string[] = jsonData.map((holding) => String(holding.AssetId));

// const Home: React.FC = () => {

//     const { state, dispatch } = useGlobalState();
// //   const { globalVariable1, setGlobalVariable1 ,globalVariable2,setGlobalVariable2} = useGlobalContext();


  

//   const fetchData = async () => {
//     // setGlobalVariable1(stock);

//     dispatch(setData(stock));

//     try {
//       const response = await getCurrentPrice(stock, state);
//     //   console.log(response);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   useEffect(() => {
//     fetchData();

   
//     const interval = setInterval(fetchData, 10000);

    
//     return () => clearInterval(interval);
//   }, [setGlobalVariable2]);

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Welcome to the Home page!</p>
//       <p>Global Variable 1: {JSON.stringify(globalVariable1)}</p>
//       <br />
//       <p>Global Variable 2: {JSON.stringify(globalVariable2)}</p>
//     </div>
//   );
// };

// export default Home;
