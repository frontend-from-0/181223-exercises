import React, { createContext, useState } from 'react';
import { loggedInUser, loggedOutUser } from '../data';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(loggedInUser);

    const handleSingIn = () => setUser(loggedInUser);
    const handleSingOut = () => setUser(loggedOutUser);
    const handleUserNameChange = (newUserName) => {
        setUser((prevUser) => ({ ...prevUser, name: newUserName }));
    };

    return (
        <UserContext.Provider value={{ user, handleSingIn, handleSingOut, handleUserNameChange }}>
            {children}
        </UserContext.Provider>
    );
};