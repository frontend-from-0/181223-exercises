import './styles.css';

export const Navbar = ({ isLoggedInUser, updateUser }) => {
	return (
		<nav className="navbar">
			{isLoggedInUser && (
				<>
					<a href="#home">Home</a>
					<a href="#account">Account</a>
					<a href="#signout" onClick={() => updateUser({ isLoggedInUser: true })}>Sign out</a>
				</>
			)}
		</nav>
	);
};