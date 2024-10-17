import './styles.css';

export const Navbar = ({ isLoggedInUser, updateUser }) => {
	const handleSignOutClick = () => {
		updateUser({ isLoggedInUser: false });
	};

	return (
		<nav className='navigation'>
			<ul className='navigation-list'>
				<li>Home</li>
				{isLoggedInUser && <li>Account</li>}
				{isLoggedInUser ? (
					<li onClick={handleSignOutClick}>Sign out</li>
				) : (
					<li>Sign in</li>
				)}
			</ul>
		</nav>
	);
};
