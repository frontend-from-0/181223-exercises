import { useContext, useState } from 'react';
import { List } from './modules/todo/List';
import { Navbar } from './components/Navbar';
import { Account } from './modules/user/Account';
import { PerformanceState } from './modules/todo/PerformanceState';
import { LogInForm } from './modules/user/LogInForm';
import { todoData } from './data';
import './App.css';
import { UserContext, UserDispatchContext } from './modules/user/UserProvider';

export const App = () => {
  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);
  const [todos, setTodos] = useState(todoData);
  const [currentView, setCurrentView] = useState('list');
  
  const handleLogin = (username) => {
    dispatch({ type: 'LOGIN', payload: { username } });
    setTodos(todoData);
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    setTodos([]);
    setCurrentView('list');
  };

  const handleHomeClick = () => {
    setCurrentView('list');
  };

  const handleAccountClick = () => {
    setCurrentView('account');
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const totalTodos = todos.length;

  return (
      <><div className='container'>
      <Navbar
        isLoggedInUser={user.isLoggedInUser}
        onSignOut={handleLogout}
        onAccountClick={handleAccountClick}
        onHomeClick={handleHomeClick} />
    </div><div className='app'>
        {!user.isLoggedInUser ? (
          <LogInForm handleLogin={handleLogin} />
        ) : (
          <>
            {currentView === 'account' ? (
              <Account username={user.username} />
            ) : (
              <>
                <List todos={todos} setTodos={setTodos} completedTodos={completedTodos} />
                <PerformanceState completedTodos={completedTodos.length} totalTodos={totalTodos} />
              </>
            )}
          </>
        )}
      </div></>
  
  );
};
