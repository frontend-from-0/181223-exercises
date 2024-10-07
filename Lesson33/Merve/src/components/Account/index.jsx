import { UserDetailsForm } from '../UserDetailsForm';
import { loggedInUser } from '../../data';
import { useState } from 'react';

export const Account = ({ onUsernameChange }) => { 
  const [username, setUsername] = useState(loggedInUser.name);
  const [showDetails] = useState(true);

  const handleNameChange = (newName) => {
    setUsername(newName);
    onUsernameChange(newName);
  };

  return (
    <div>
      <h1>Welcome, {username}</h1>
      {showDetails && (
        <>
          <UserDetailsForm username={username} onNameChange={handleNameChange} />
        </>
      )}
    </div>
  );
};
