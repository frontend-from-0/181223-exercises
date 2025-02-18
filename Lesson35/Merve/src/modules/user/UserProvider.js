import { createContext, useReducer } from 'react';

export const UserContext = createContext();
export const UserDispatchContext = createContext();
export const UserAuthContext = createContext();

const initialState = {
  name: 'Guest',
  isLoggedInUser: false,
  currentView: 'list',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'LOGIN':
      const user = authenticateUser(action.payload.username, action.payload.password);
      if (user) {
        return { ...state, isLoggedInUser: true, username: action.payload.username };
      } else {
        return { ...state, isLoggedInUser: false };
      }
    case 'ACCOUNT_CLICK':
      return { ...state, currentView: 'account' };
    case 'HOME_CLICK':
      return { ...state, currentView: 'list' };
    case 'LOGOUT':
      return { ...state, isLoggedInUser: false, username: 'Guest' };
    case 'SET_VIEW':
      return { ...state, currentView: action.payload };
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
      <UserDispatchContext.Provider value={{ dispatch, authenticateUser }}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
