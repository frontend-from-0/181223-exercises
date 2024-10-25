import { useState, useContext } from "react";
import { UserDispatchContext } from "../UserProvider";
import './styles.css';

export const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { dispatch, authenticateUser } = useContext(UserDispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('username:', username, 'password:', password);
    const user = authenticateUser(username, password);

    if (user) {
      console.log("User authenticated:", user);
      dispatch({ type: 'LOGIN', payload: { username: user.username } });
      setError("");
    } else {
      console.log("Authentication failed"); 
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
