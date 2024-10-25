import { UserDetailsForm } from '../UserDetailsForm';
import { useContext } from 'react';
import { UserContext } from '../UserProvider';

export const Account = ({username}) => {
 
  return (
    <div>
        <>
          <h1>Welcome, {username || "Guest"}</h1>
          <UserDetailsForm username={username} />
        </>
     
    </div>
  );
};
