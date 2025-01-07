import React, { useState, useEffect } from 'react';
import { useUserContext } from '../Context/UserContext';

export const UserDetailsForm = () => {
  const { state, dispatch } = useUserContext();
  const [username, setUsername] = useState(state.username);

  useEffect(() => {
    setUsername(state.username);
  }, [state.username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_USERNAME', payload: { username } });
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