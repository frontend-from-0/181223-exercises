
import { createContext, useReducer, useContext } from 'react';

const UserContext = createContext();

const initialState = {
    isLoggedInUser: false,
    username: '',
};

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLoggedInUser: true, username: action.payload.username };
        case 'LOGOUT':
            return { ...state, isLoggedInUser: false, username: '' };
        case 'UPDATE_USERNAME':
            return { ...state, username: action.payload.username };
        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);