import { Account } from './components/Account';
import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { PerformanceState } from './components/PerformanceState';
import './App.css';
import { loggedInUser, loggedOutUser, todoData } from './data';
import { useState } from 'react';

export const App = () => {
	const [user, setUser] = useState(loggedInUser);
	const [showAccountPage, setShowAccountPage] = useState(false);
	const [todos, setTodos] = useState(todoData);

	const handleAccountClick = () => {
		setShowAccountPage(true);
	};

	const handleHomeClick = () => {
		setShowAccountPage(false);
	};

	const handleSignIn = () => {
		setUser(loggedInUser);
		setShowAccountPage(false);
	};

	const handleSignOut = () => {
		setUser(loggedOutUser);
		setShowAccountPage(false);
	};

	const handleUserNameChange = (newUserName) => {
		setUser((prevUser) => ({ ...prevUser, name: newUserName }));
	};

	const completeTodos = todos.filter(todo => todo.completed);

	return (
		<>
			<div className='container'>
				<Navbar
					isLoggedInUser={user.isLoggedInUser}
					updateUser={setUser}
					onAccountClick={handleAccountClick}
					onHomeClick={handleHomeClick}
					onSignIn={handleSignIn}
					onSignOut={handleSignOut}
				/>
			</div>

			<div className='app'>
				{user.isLoggedInUser ? (
					showAccountPage ? (
						<Account
							username={user.name}
							onUsernameChange={handleUserNameChange}
						/>
					) : (
						<List todos={todos} setTodos={setTodos} completeTodos={completeTodos} />
					)
				) : (
					<h2 className='signin-message'>Please login</h2>
				)}
				{user.isLoggedInUser && !showAccountPage && (
					<PerformanceState completeTodos={completeTodos.length} totalTodos={todos.length} />
				)}
			</div>
		</>
	);
};
