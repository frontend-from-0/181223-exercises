import { useState } from 'react';
import { useUserContext } from '../Context/UserContext';
import registeredUsers from '../registeredUsers';
import './styles.css';
import { Pages } from '../../App';

export const LogIn = ({setCurrentPage}) => {
    const { dispatch } = useUserContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Both Fields Are Required');
            return;
        }

        const user = registeredUsers.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            dispatch({
                type: 'LOGIN',
                payload: { username, isLoggedInUser: true }
            });
            setCurrentPage(Pages.LIST);
            setError('');
        } else {
            setError('Invalid Username or Password');
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit} noValidate>
            <h2>Login</h2>
            
            <div className="input-group">
                <label for="Username">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <p className='error-message'>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
};

