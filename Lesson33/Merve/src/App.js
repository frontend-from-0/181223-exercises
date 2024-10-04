import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { Account } from './components/Account';
import './App.css';
import { loggedInUser, loggedOutUser, todoData } from './data'; // 
import { useState } from 'react';

export const App = () => {
	const [user, setUser] = useState(loggedOutUser);
	const [showAccountPage, setShowAccountPage] = useState(false);
	const [showListPage, setShowListPage] = useState(false);
	const [todos, setTodos] = useState(todoData);

	const handleAccountClick = () => {
		setShowAccountPage(true);
		setShowListPage(false);
	};

	const handleHomeClick = () => {
		setShowListPage(true);
		setShowAccountPage(false);
	};

	const handleSignOut = () => {
		setUser(loggedOutUser);
		setShowAccountPage(false);
		setShowListPage(false);
	};
	const handleSignIn = () => {
		setUser(loggedInUser);
		setShowListPage(true);
		setShowAccountPage(false);
	};


	const completedTodos = todos.filter(todo => todo.completed);
	return (
		<>
			<div className='container'>
				<Navbar
					isLoggedInUser={user.isLoggedInUser}
					updateUser={setUser}
					onAccountClick={handleAccountClick}
					onHomeClick={handleHomeClick}
					onSignOut={handleSignOut}
					onSignIn={handleSignIn}
				/>
			</div>
			<div className='app'>
				{showAccountPage ? (
					<Account completedTodos={completedTodos} />
				) : (
					<>
						{user.isLoggedInUser && showListPage ? (
							<List todos={todos} setTodos={setTodos} />
						) : (
							<h2 class='signin-message'>Please Log In</h2>
						)}
					</>
				)}
			</div>
		</>
	);
};
