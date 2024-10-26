import { useState, useContext } from "react";
import { UserDispatchContext } from "../UserProvider";
import './styles.css';

export const UserDetailsForm = ({ username }) => {
  const [newName, setNewName] = useState(username);
  const { dispatch } = useContext(UserDispatchContext);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() === "") {
      setError("Username cannot be empty");
      return;
    }
    dispatch({ type: 'UPDATE_NAME', payload: newName });
    setNewName("");
    setError("");
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
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};
