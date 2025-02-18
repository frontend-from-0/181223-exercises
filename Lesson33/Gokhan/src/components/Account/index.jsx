import React from 'react';
import { useUserContext } from '../Context/UserContext';
import { UserDetailsForm } from '../UserDetailsForm';

export const Account = () => {
  const { state } = useUserContext();

  return (
    <div className="account-container">
      <h2>Account information</h2>
      <p>Current Username: {state.username}</p>
      <UserDetailsForm />
    </div>
  );
};