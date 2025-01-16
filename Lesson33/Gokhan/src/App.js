import React, { useState } from 'react';
import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { Account } from './components/Account';
import { PerformanceState } from './components/PerformanceState';
import { LogIn } from './components/LogIn';
import { useUserContext } from './components/Context/UserContext';
import './App.css';

const initialTodos = [
	{ id: 1, text: 'Do not give up', completed: false },
	{ id: 2, text: 'Keep Dreaming', completed: true },
	{ id: 3, text: 'Follow Your Dreams', completed: false },
	{ id: 4, text: 'Work Hard', completed: false },
	{ id: 5, text: 'Think Possitive', completed: true },
	{ id: 6, text: 'Finish Course', completed: false },
];

export const App = () => {
	const [todos, setTodos] = useState(initialTodos);

	return (
		<div className='container'>
			<Navbar />
			<MainContent todos={todos} setTodos={setTodos} />
		</div>
	);
};

const MainContent = ({ todos, setTodos }) => {
	const { state } = useUserContext();

	// const updateUsername = (newUsername) => {
	// 	dispatch({ type: 'UPDATE_USERNAME', payload: { username: newUsername } });
	// };

	return (
		<>
			{state.isLoggedInUser ? (
				<>
					<Account />
					<List
						todos={todos}
						setTodos={setTodos} />
					<PerformanceState
						totalTodos={todos.length}
						completedTodos={todos.filter(todo => todo.completed).length} />
				</>
			) : (
				<LogIn />
			)}
		</>
	);
};