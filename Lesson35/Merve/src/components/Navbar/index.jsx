import './styles.css';
import { useContext } from 'react';
import { UserDispatchContext } from '../../modules/user/UserProvider';

export const Navbar = ({ isLoggedInUser }) => {
  const { dispatch } = useContext(UserDispatchContext);
  
  const handleAccountClick = () => {
    dispatch({ type: 'ACCOUNT_CLICK' });
  };

  const handleHomeClick = () => {
    dispatch({ type: 'HOME_CLICK' });
  };

  const handleSignOut =() => {
    dispatch({ type: 'LOGOUT' });
  };
  
  return (
    <nav className='navigation'>
      <ul className='navigation-list'>
        <li className='home-btn' onClick={handleHomeClick}>Home</li>
        {isLoggedInUser ? (
          <>
            <li className='account-btn' onClick={handleAccountClick}>Account</li>
            <li className='out-btn' onClick={handleSignOut}>Sign out</li>
          </>
        ) : (
          <li className='in-btn'>Sign in</li>
        )}
      </ul>
    </nav>
  );
};
