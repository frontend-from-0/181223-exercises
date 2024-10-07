import { useState } from "react";
import './styles.css';

export const UserDetailsForm = ({ username, onNameChange }) => {
  const [newName, setNewName] = useState(username);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameChange(newName);
  };

  return (
    <form className='user-details-form' onSubmit={handleSubmit}>
      <input
        className='user-details-form-input'
        type="text"
        value={newName}
        onChange={handleChange}
        placeholder="Change username"
      />
      <button className='btn-submit' type="submit">Change Username</button>
    </form>
  );
};
