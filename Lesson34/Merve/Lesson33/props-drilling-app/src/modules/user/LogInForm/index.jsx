import { useState, useContext } from "react";
import { UserDispatchContext } from "../UserProvider";
import './styles.css';

export const LogInForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatchUser = useContext(UserDispatchContext);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "johndoe01" && password === "password123") {
            dispatchUser({ isLoggedInUser: true, username });
            setError("");
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <h2>Please login to access additional features</h2>
            <form class="login_form" onSubmit={handleSubmit}>
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
            </form></>
    );
};
