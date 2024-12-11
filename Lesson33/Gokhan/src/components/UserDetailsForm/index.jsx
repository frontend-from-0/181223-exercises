import './styles.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';

export const UserDetailsForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [tempUsername, setTempUsername] = useState(user.name);

  const handleChange = (e) => {
    setTempUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser((prevUser) => ({ ...prevUser, name: tempUsername }));
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