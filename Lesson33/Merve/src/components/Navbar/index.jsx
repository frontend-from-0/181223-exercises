import './styles.css';

export const Navbar = ({ isLoggedInUser, onAccountClick, onHomeClick, onSignOut, onSignIn }) => {

	return (
		<nav className='navigation'>
			<ul className='navigation-list'>
				<li className='home-btn' onClick={onHomeClick}>Home</li>
				{isLoggedInUser ? (
					<>
						<li className='account-btn' onClick={onAccountClick}>Account</li>
						<li className='out-btn' onClick={onSignOut}>Sign out</li>
					</>
				) : (
					<li className='in-btn' onClick={onSignIn}>Sign in</li>
				)}
			</ul>
		</nav>
	);
};
