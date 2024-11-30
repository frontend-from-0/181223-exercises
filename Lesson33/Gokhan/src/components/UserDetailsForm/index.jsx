import './styles.css';
import { useState } from 'react';

export const UserDetailsForm = ({ username, onUsernameChange }) => {
  const [tempUsername, setTempUsername] = useState(username);


  const handleChange = (e) => {
    onUsernameChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUsernameChange(tempUsername);
  };

  return (
    <form className='user-details-form'>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};