import './styles.css';
import { useContext, useState } from 'react';
import { UserContex } from '../../context/UserContext';

export const UserDetailsForm = ({ username, onUsernameChange }) => {
  const [tempUsername, setTempUsername] = useState(username);
  const { setUser } = useContext(UserContex);


  const handleChange = (e) => {
    setTempUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUsernameChange(tempUsername);
    setUser(tempUsername);
  };

  return (
    <form className='user-details-form' onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={tempUsername}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};