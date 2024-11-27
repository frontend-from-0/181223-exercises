
import React, { useState, useEffect } from 'react';

export const UserDetailsForm = ({ incomingUsername, updateUsername }) => {
    const [username, setUsername] = useState(incomingUsername);

    useEffect(() => {
        setUsername(incomingUsername);
    }, [incomingUsername]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUsername(username); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <button type="submit">Save</button>
        </form>
    );
};