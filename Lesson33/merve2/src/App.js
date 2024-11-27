
import React, { useState } from 'react';
import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { Account } from './components/Account';
import { PerformanceState } from './components/PerformanceState';
import { LogIn } from './components/LogIn'; 
import { UserProvider, useUserContext } from './context/UserContext'; 
import './App.css';

const initialTodos = [
    { id: 1, text: 'Do dishes', completed: true },
    { id: 2, text: 'Do homework', completed: false },
    { id: 3, text: 'Go running', completed: false },
    { id: 4, text: 'Read a book', completed: false },
    { id: 5, text: 'Write code', completed: false },
    { id: 6, text: 'Go grocery shopping', completed: false },
];

export const App = () => {
    const [todos, setTodos] = useState(initialTodos); 

    return (
        <UserProvider>
            <div className='container'>
                <Navbar />
                <MainContent todos={todos} setTodos={setTodos} /> 
            </div>
        </UserProvider>
    );
};

const MainContent = ({ todos, setTodos }) => { 
    const { state, dispatch } = useUserContext(); 

    const updateUsername = (newUsername) => {
        dispatch({ type: 'UPDATE_USERNAME', payload: { username: newUsername } });
    };

    return (
        <>
            {state.isLoggedInUser ? (
                <>
                    <Account incomingUsername={state.username} updateUsername={updateUsername} /> 
                    <List todos={todos} setTodos={setTodos} /> 
                    <PerformanceState totalTodos={todos.length} completedTodos={todos.filter(todo => todo.completed).length} />
                </>
            ) : (
                <LogIn />
            )}
        </>
    );
};