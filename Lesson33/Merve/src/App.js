import { List } from './components/List';
import { Navbar } from './components/Navbar';
import { Account } from './components/Account';
import { PerformanceState } from './components/PerformanceState';
import './App.css';
import { loggedInUser, loggedOutUser, todoData } from './data';
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

  const handleUsernameChange = (newUsername) => {
    setUser((prevUser) => ({ ...prevUser, name: newUsername }));
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
          <Account onUsernameChange={handleUsernameChange} />
        ) : (
          <>
            {user.isLoggedInUser && showListPage ? (
              <List todos={todos} setTodos={setTodos} completedTodos={completedTodos} />
            ) : (
              <h2 className='signin-message'>Please Log In</h2>
            )}
          </>
        )}
        {user.isLoggedInUser && !showAccountPage && (
          <PerformanceState completedTodos={completedTodos.length} totalTodos={todos.length} />
        )}
      </div>
    </>
  );
};
