import './styles.css';

export const Navbar = ({ isLoggedInUser, updateUser }) => {
	return (
		<nav className="navbar">
			{isLoggedInUser && (
				<>
					<a href="#home">Home</a>
					<a href="#account">Account</a>
					<a href="#signout" onClick={() => updateUser({ isLoggedInUser: false })}>Sign out</a>
				</>
			)}
		</nav>
	);
};


// import './styles.css';

// export const Navbar = ({ isLoggedInUser, onAccountClick, onHomeClick, onSignOut, onSignIn }) => {

// 	return (
// 		<nav className='navigation'>
// 			<ul className='navigation-list'>
// 				<li class='home-btn' onClick={onHomeClick}>Home</li>
// 				{isLoggedInUser ? (
// 					<>
// 						<li class='account-btn' onClick={onAccountClick}>Account</li>
// 						<li class='out-btn' onClick={onSignOut}>Sign out</li>
// 					</>
// 				) : (
// 					<li class='in-btn' onClick={onSignIn}>Sign in</li>
// 				)}
// 			</ul>
// 		</nav>
// 	);
// };