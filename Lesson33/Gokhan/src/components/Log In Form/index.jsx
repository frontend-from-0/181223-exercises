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

// import { useState, useContext } from "react";
// import { UserContext } from '../../context/UserContext';

// export default LoginForm;

// const LoginForm = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const { setUser } = useContext(UserContext);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setUser({ isLoggedInUser: true, username });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Username:
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//             </label>
//             <label>
//                 Password:
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </label>
//             <button type='submit'>Log In</button>
//         </form>
//     );
// };

