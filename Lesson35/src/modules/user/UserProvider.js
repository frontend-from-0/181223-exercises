import React, { createContext, useReducer } from 'react';

const initialState = {
  name: 'Guest',
  isLoggedInUser: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'LOGIN':
      return { ...state, isLoggedInUser: true };
    case 'LOGOUT':
      return { ...state, isLoggedInUser: false, name: 'Guest' };
    default:
      return state;
  }
};

export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
