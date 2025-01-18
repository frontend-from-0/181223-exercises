import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { Account } from './components/Account';
import { PerformanceState } from './components/PerformanceState';
import './App.css';
import { loggedInUser } from './data';
import { useState } from 'react';

const initialTodos = [
    { id: 1, text: 'Do dishes', completed: true },
    { id: 2, text: 'Do homework', completed: true },
    { id: 3, text: 'Go running', completed: true },
    { id: 4, text: 'Do dishes 2', completed: true },
    { id: 5, text: 'Do homework 3', completed: true },
    { id: 6, text: 'Go running 4', completed: true },
];

export const App = () => {
    const [user, setUser] = useState(loggedInUser);
    const [todos, setTodos] = useState(initialTodos); 
    const updateUsername = (newUsername) => {
        setUser((prevUser) => ({ ...prevUser, username: newUsername }));
    };

    
    const totalTodos = todos.length; 
    const completedTodos = todos.filter(todo => todo.completed).length; 

    return (
        <div className='container'>
            <Navbar isLoggedInUser={user.isLoggedInUser} updateUser={setUser} />
            {user.isLoggedInUser && (
                <>
                    <List todos={todos} setTodos={setTodos} />
                    <Account incomingUsername={user.username} updateUsername={updateUsername} />
                    <PerformanceState totalTodos={totalTodos} completedTodos={completedTodos} />
                </>
            )}
        </div>
    );
};
