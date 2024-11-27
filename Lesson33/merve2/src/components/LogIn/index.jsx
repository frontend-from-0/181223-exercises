import { useState } from 'react';
import { useUserContext } from '../../context/UserContext';
import './styles.css'; 

export const LogIn = () => {
    const { dispatch } = useUserContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            dispatch({ type: 'LOGIN', payload: { username } });
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Log In</button>
        </form>
    );
};