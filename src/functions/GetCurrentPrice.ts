import axios from 'axios';

export const getCurrentPrice = async (stocks: string[]) => {
  try {
    const response = await axios.post(
      'https://8byorvx1dk.execute-api.ap-south-1.amazonaws.com/default/sigfyn-ui-api-GetStockPrices',
      stocks,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(response.data);
    // Set the global variable
    // dispatch(setData(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
