import React from 'react';
import { useUserContext } from '../Context/UserContext';
import './styles.css';

export const Account = () => {
  const { state, dispatch } = useUserContext();

  const updateUsername = (newUserName) => {
    dispatch({ type: 'UPDATE_USERNAME', payload: { username: newUserName } });
  }


  return (
    <div className="account-container">
      <h1>Account information</h1>
      <UserDetailsForm incomingUsername={state.username} updateUsername={updateUsername} />
    </div>
  );
}