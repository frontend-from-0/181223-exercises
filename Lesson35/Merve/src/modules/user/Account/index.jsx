import { UserDetailsForm } from '../UserDetailsForm';
import { useContext } from 'react';
import { UserContext } from '../UserProvider';

export const Account = () => {
  const user = useContext(UserContext); 
  return (
    <div>
        <>
          <h1>Welcome, {user.name || "Guest"}</h1>
          <UserDetailsForm username={user.name} />
        </>
     
    </div>
  );
};
