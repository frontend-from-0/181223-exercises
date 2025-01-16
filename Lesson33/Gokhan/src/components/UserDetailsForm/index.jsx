import React, { useState } from 'react';

export const UserDetailsForm = ({ username, onUsernameChange }) => {
    const [tempUsername, setTempUsername] = useState(username);

    const handleChange = (e) => {
        setTempUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUsernameChange(tempUsername);
    };

    return (
        <form className='user-details-form' onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={tempUsername}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Update</button>
        </form>
    );
};