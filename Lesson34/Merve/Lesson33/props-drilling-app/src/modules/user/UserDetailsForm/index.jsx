import { useState, useContext } from "react";
import { UserDispatchContext } from "../UserProvider";
import './styles.css';

export const UserDetailsForm = ({ username, onNameChange }) => {
  const [newName, setNewName] = useState(username);
  const setUser = useContext(UserDispatchContext);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser((prevUser) => ({
      ...prevUser,
      name: newName
    }));
    onNameChange(newName);
  };

  return (
    <form className="user-details-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={handleChange}
        placeholder="Change username"
      />
      <button className="btn-submit" type="submit">Change Username</button>
    </form>
  );
};
