import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = () => setUser({ isLoggedInUser: true, name: 'John Doe' });
    const logout = () => setUser({ isLoggedInUser: false, name: '' });
    const updateUsername = (name) => setUser((prevUser) => ({ ...prevUser, name }));

    return (
        <UserContext.Provider value={{ user, setUser, login, logout, updateUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

export { UserContext };