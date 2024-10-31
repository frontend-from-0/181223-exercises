import { useState } from "react"
import './styles.css';

export const UserDetailsForm = ({ incomingUsername, onUsernameChange }) => {
  const [username, setUsername] = useState(incomingUsername);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUsernameChange(username);
  };

  return (
    <form className='user-details-form' onSubmit={handleSubmit}>
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