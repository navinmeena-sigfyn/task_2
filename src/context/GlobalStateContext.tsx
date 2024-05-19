
import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';
import { globalReducer, initialState, State } from './reducer';
import { ActionTypes } from './Action';

interface GlobalStateContextType {
  state: State;
  dispatch: Dispatch<ActionTypes>;
}


const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);


const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
