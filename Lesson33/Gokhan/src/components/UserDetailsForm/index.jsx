import React, { useState, useEffect } from 'react';
import { useUserContext } from '../Context/UserContext';

export const UserDetailsForm = () => {
  const { state, dispatch } = useUserContext();

  const updateUsername = (newUserName) => {
    dispatch({ type: 'UPDATE_USERNAME', payload: { username: newUserName } });
  };

  return (
    <form>
      <label>
        Username:
        <input
          type='text'
          value={state.username}
          onChange={(e) => updateUsername(e.target.value)}
        />
      </label>
    </form>
  );
};