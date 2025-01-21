import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { Account } from './components/Account';
import { PerformanceState } from './components/PerformanceState';
import './App.css';
import { loggedInUser, loggedOutUser, todoData } from './data';
import { useState } from 'react';
import { UserProvider } from './context/UserContext';

export const App = () => {
	// const [user, setUser] = useState(loggedInUser);
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

	const handleSignIn = () => {
		setUser(loggedInUser);
		setShowListPage(true);
		setShowAccountPage(false);

	};

	const handleSignOut = () => {
		dispatch({
			type: 'LOGOUT',
		});
		setUser(loggedOutUser);
		setShowAccountPage(false);
		setShowListPage(false);
	};

	// const handleUserNameChange = (newUserName) => {
	// 	setUser((prevUser) => ({ ...prevUser, name: newUserName }));
	// };

	const complateTodos = todos.filter(todo => todo.completed);

	return (
		<UserProvider>
			<div className='container'>
				<Navbar
					isLoggedInUser={user.isLoggedInUser}
					// updateUser={setUser}
					onAccountClick={handleAccountClick}
					onHomeClick={handleHomeClick}
					onSignIn={handleSignIn}
					onSignOut={handleSignOut}
				/>
			</div>

			<div className='app'>
				{!user.isLoggedInUser ? (
					<Login />
				) : (
					<>
						{showAccountPage || !showListPage ? (
							<Account />
						) : (
							<>
								{showListPage ? (
									<List
										todos={todos}
										setTodos={setTodos}
										complateTodos={complateTodos}
									/>
								) : (
									<h2 className='signin-message'>Please login</h2>
								)}
							</>
						)}
						{!showAccountPage && (
							<PerformanceState
								complateTodos={complateTodos.length}
								totalTodos={todos.length}
							/>
						)}
					</>
				)}
			</div>
		</UserProvider>
	);
};