import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();
export const UserDispatchContext = createContext();
export const UserAuthContext = createContext();

const initialState = {
  name: 'Guest',
  isLoggedInUser: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'LOGIN':
      return { ...state, isLoggedInUser: true, username: action.payload.username };
    case 'LOGOUT':
      return { ...state, isLoggedInUser: false, username: 'Guest' };
    default:
      return state;
  }
};

const authenticateUser = (username, password) => {
const registeredUsers = [
  { username: "johndoe01", password: "password123" },
  { username: "janedoe02", password: "password456" },
];

  return registeredUsers.find(
    (user) => user.username === username && user.password === password
  );
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={{dispatch, authenticateUser}}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
