/*
//The same is Redux flow
 */

import React, {useReducer} from 'react';
import * as types from './actionTypes';

//=======Create default state
const defaultState = {
  userData: {},
  user: {},
  isTest: false,
  content: 'hello hook',
  error: null,
  myFavorite: [],
};

//=====Create Reducers ===================
function reducerCreator(state, action) {
  switch (action.type) {
    case types.GET_DATA_USER:
      return {
        ...state,
        isTest: !state.isTest,
        userData: action.payload,
        user: action.payload.data.results[0].user,
      };

    case types.GET_DATA_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.ADD_MY_FAVORITE:
      return {
        ...state,
        myFavorite: [...state.myFavorite].concat(action.payload),
      };

    default:
      throw new Error('Action type must be defined');
  }
}

//========Create Context========
export const StoreContext = React.createContext({});
const Store = ({children}) => {
  const [state, dispatch] = useReducer(reducerCreator, defaultState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
export default Store;
