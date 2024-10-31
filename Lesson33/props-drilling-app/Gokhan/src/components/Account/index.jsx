import { UserDetailsForm } from '../UserDetailsForm';
import { useState } from 'react';

export const Account = () => {
  const [username, setUsername] = useState('Placeholder User Name');

  return (
    <div className="account-container">
      <h1>Account information</h1>
      <UserDetailsForm
        incomingUsername={username}
        setUsername={setUsername}
      />
    </div>
  );
};