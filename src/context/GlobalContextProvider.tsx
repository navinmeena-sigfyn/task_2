import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [globalVariable1, setGlobalVariable1] = useState<any>('Default Value 1');
  const [globalVariable2, setGlobalVariable2] = useState<any>('Default Value 2');

  return (
    <GlobalContext.Provider value={{ globalVariable1, setGlobalVariable1, globalVariable2, setGlobalVariable2 }}>
      {children}
    </GlobalContext.Provider>
  );
};
