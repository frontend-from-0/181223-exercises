import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        isLoggedInUser: false,
        name: '',
    });

    const login = () => setUser({ isLoggedInUser: true, name: 'John Doe' });
    const logout = () => setUser({ isLoggedInUser: false, name: '' });
    const updateUsername = (newUserName) => setUser((prevUser) => ({ ...prevUser, name: newUserName }));

    return (
        <UserContext.Provider value={{ user, setUser, login, logout, updateUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);