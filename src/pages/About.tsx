import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const About: React.FC = () => {
  const { globalVariable2 } = useGlobalContext();

  return (
    <div>
      <h1>Page2nd </h1>
      <p>This is the About page.</p>
      <p>Global Variable 2: {JSON.stringify(globalVariable2)}</p>
     
    </div>
  );
};

export default About;
