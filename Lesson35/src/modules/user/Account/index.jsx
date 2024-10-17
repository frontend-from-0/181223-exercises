import { UserDetailsForm } from '../UserDetailsForm';
import { useContext, useState } from 'react';
import { UserContext, UserDispatchContext } from '../UserProvider';

export const Account = () => {
  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);
  const [showDetails, setShowDetails] = useState(true);

  const handleNameChange = (newName) => {
    dispatch({ type: 'UPDATE_NAME', payload: newName });
  };

  return (
    <div>
      {showDetails && user && (
        <>
          <h1>Welcome, {user.name || "Guest"}</h1>
          <UserDetailsForm username={user.name} onNameChange={handleNameChange} />
        </>
      )}
    </div>
  );
};
