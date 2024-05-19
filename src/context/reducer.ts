

import { ActionTypes, SET_DATA } from './Action';

interface State {
  data: any;
}

const initialState: State = {
  data: '',
};

const globalReducer = (state: State = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { globalReducer, initialState, type State };
