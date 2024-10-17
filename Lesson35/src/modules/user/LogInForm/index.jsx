import { useState } from "react";
import './styles.css';

const registeredUsers = [
  { username: "johndoe01", password: "password123" },
  { username: "janedoe02", password: "password456" },
];

export const LogInForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      handleLogin(user.username);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <h2>Please login to access additional features</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Log In</button>
      </form>
    </>
  );
};
