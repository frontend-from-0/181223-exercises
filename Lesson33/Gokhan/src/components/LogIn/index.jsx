import { useState } from 'react';
import { useUserContext } from '../Context/UserContext';
import registeredUsers from '../Data/registeredUsers';
import './styles.css';

export const LogIn = () => {
    const { dispatch } = useUserContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            // dispatch({ type: 'LOGIN', payload: { username } });
            setError('Both Fields Are Required')
        }

        const user = registeredUsers.find(
            (user) => user.username === username && user.password === pasword
        );

        if (user) {
            dispatch({ type: 'LOGIN', payload: { username } });
            setError('');
        } else {
            setError('Invalid Username or Password');
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <div class="username-container">
                <label for="Username">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div class="password-container">
                <label for="password">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

