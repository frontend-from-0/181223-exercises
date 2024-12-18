
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


// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     const login = () => setUser({ isLoggedInUser: true, name: 'John Doe' });
//     const logout = () => setUser({ isLoggedInUser: false, name: '' });
//     const updateUsername = (name) => setUser((prevUser) => ({ ...prevUser, name }));

//     return (
//         <UserContext.Provider value={{ user, setUser, login, logout, updateUsername }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => useContext(UserContext);

// export { UserContext };