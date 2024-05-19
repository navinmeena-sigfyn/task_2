
export const SET_DATA = 'SET_DATA';

interface SetDataAction {
  type: typeof SET_DATA;
  payload: any;
}


export type ActionTypes = SetDataAction;


export const setData = (data: any): SetDataAction => ({
  type: SET_DATA,
  payload: data,
});
