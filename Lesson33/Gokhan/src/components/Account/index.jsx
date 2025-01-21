import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { UserDetailsForm } from './UserDetailsForm';

export const Account = () => {

  const { username } = useContext(UserContext);

  return (
    <div className="account-container">
      <h2>Account information</h2>
      <p>Current Username: {username}</p>
      <UserDetailsForm />
    </div>
  );
};