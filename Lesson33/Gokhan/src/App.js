import { UserProvider, useUser } from './Context/UserContext';
import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { Account } from './components/Account';
import { PerformanceState } from './components/PerformanceState';
import './App.css';
import { todoData } from './data';
import { useState } from 'react';

export const App = () => {
	const { user, login, logout, updateUsername } = useUser();
	const [showAccountPage, setShowAccountPage] = useState(false);
	const completeTodos = todoData.filter(todo => todo.completed);

	const handleAccountClick = () => {
		setShowAccountPage(true);
	};

	const handleHomeClick = () => {
		setShowAccountPage(false);
	};

	const handleSignIn = () => {
		login();
		setShowAccountPage(false);
	};

	const handleSignOut = () => {
		logout();
		setShowAccountPage(false);
	};

	const handleUserNameChange = (newUserName) => {
		updateUsername(newUserName);
	};

	return (
		<UserProvider>
			<div className='container'>
				<Navbar
					isLoggedInUser={user.isLoggedInUser}
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
						<List todos={todoData} completeTodos={completeTodos} />
					)
				) : (
					<h2 className='signin-message'>Please login</h2>
				)}

				<PerformanceState completeTodos={completeTodos.length} totalTodos={todoData.length} />

			</div>
		</UserProvider>
	);
};
