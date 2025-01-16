import React from 'react';
import './styles.css';
import { UserDetailsForm } from './UserDatailsForm';

export const Account = () => {
  return (
    <div className="account-container">
      <h1>Account information</h1>
      <UserDetailsForm />
    </div>
  );
};