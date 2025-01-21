import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('defaultUser');

    const updateUsername = (newUsername) => {
        setUsername(newUsername);
    };

    return (
        <UserContext.Provider value={{ username, updateUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserDetailsForm = () => {
    const { username, updateUsername } = useContext(UserContext);
    const [tempUsername, setTempUsername] = useState(username);

    const handleChange = (e) => {
        setTempUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUsername(tempUsername);
    };

    return (
        <form className='user-details-form' onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type='text'
                    value={tempUsername}
                    onChange={handleChange}
                />
            </label>
            <button type='submit'>Update</button>
        </form>
    );
};