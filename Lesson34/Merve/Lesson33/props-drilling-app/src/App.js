import { List } from './modules/todo/List';
import { Navbar } from './components/Navbar';
import { Account } from './modules/user/Account';
import { PerformanceState } from './modules/todo/PerformanceState';
import { LogInForm } from './modules/user/LogInForm';
import './App.css';
import { loggedInUser, loggedOutUser, todoData } from './data';
import { useState } from 'react';
import { UserProvider } from './modules/user/UserProvider';

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
    <UserProvider>
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
        {user.isLoggedInUser ? (
          <>
            {showAccountPage ? (
              <Account />
            ) : (
              <>
                <List todos={todos} setTodos={setTodos} completedTodos={completedTodos} />
                <PerformanceState completedTodos={completedTodos.length} totalTodos={todos.length} />
              </>
            )}
          </>
        ) : (
          <LogInForm />
        )}
      </div>
    </UserProvider>
  );
};