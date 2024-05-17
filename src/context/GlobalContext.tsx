import React, { createContext, useContext } from 'react';

interface GlobalContextProps {
  globalVariable1: string;
  setGlobalVariable1: React.Dispatch<React.SetStateAction<any>>;
  globalVariable2: string;
  setGlobalVariable2: React.Dispatch<React.SetStateAction<any>>;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalContext;
