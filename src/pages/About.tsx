import React from 'react';
import { useGlobalState } from '../context/GlobalStateContext';
import { Link } from 'react-router-dom';


const About: React.FC = () => {
  const { state } = useGlobalState();

  return (
    <div>
      <h1>2nd page</h1>
      <p>Global Data: {JSON.stringify(state.data)}</p>
      <br />
      <Link to="/">Go to 1st Page</Link>
    </div>
  );
};

export default About;
