import { useState, useEffect } from "react";
import './styles.css';

export const UserDetailsForm = ({ incomingUsername, updateUsername }) => {
  const [username, setUsername] = useState(incomingUsername);

  
  useEffect(() => {
    setUsername(incomingUsername);
  }, [incomingUsername]);

  function handleSubmit(e) {
    e.preventDefault(); 
    console.log('New user name is: ', username);
    updateUsername(username); 
    console.log('Username updated successfully!'); // B
  }

  return (
    <form className='user-details-form' onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="username" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
      />
      <button type="submit">Save</button>
    </form>
  );
}