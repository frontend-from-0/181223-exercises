import { UserDetailsForm } from '../UserDetailsForm';
import { loggedInUser } from '../../data';
import { useState } from 'react';

export const Account = ({ completedTodos }) => {
  const [username, setUsername] = useState(loggedInUser.name);
  const [showDetails] = useState(true);
  const handleNameChange = (newName) => {
    setUsername(newName);
  };

  return (
    <div>
      <h1>Welcome, {username}</h1>
      {showDetails && (
        <>
          <UserDetailsForm username={username} onNameChange={handleNameChange} />
          <h3>Completed Todos</h3>
          <ul>
            {completedTodos.length > 0 ? (
              completedTodos.map(item => <li key={item.id}>{item.title}</li>)
            ) : (
              <li>No completed todos</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};
