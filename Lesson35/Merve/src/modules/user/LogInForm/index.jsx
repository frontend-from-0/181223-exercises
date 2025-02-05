import { useState, useContext } from "react";
import { UserDispatchContext } from "../UserProvider";
import './styles.css';

export const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useContext(UserDispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = dispatch({ type: 'LOGIN', payload: { username, password } });
    if (!success) {
      setError("Invalid username or password");
    } else {
      setError("");
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
