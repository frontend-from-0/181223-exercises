import React, { useState } from 'react';
import { useUserContext } from '../Context/UserContext';

export const UserDetailsForm = () => {
    const { state, dispatch } = useUserContext();
    const [tempUsername, setTempUsername] = useState(state.username);

    const handleChange = (e) => {
        setTempUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'UPDATE_USERNAME',
            payload: { username: tempUsername }
        });
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