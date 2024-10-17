import { useReducer, useState } from 'react';
import { List } from './modules/todo/List';
import { Navbar } from './components/Navbar';
import { Account } from './modules/user/Account';
import { PerformanceState } from './modules/todo/PerformanceState';
import { LogInForm } from './modules/user/LogInForm';
import { todoData } from './data';
import './App.css';

const initialState = {
  isLoggedInUser: false,
  username: 'Guest',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedInUser: true,
        username: action.payload.username,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedInUser: false,
        username: 'Guest',
      };
    default:
      return state;
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todos, setTodos] = useState([]);
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
    <>
      <div className='container'>
        <Navbar
          isLoggedInUser={state.isLoggedInUser}
          onSignOut={handleLogout}
          onAccountClick={handleAccountClick}
          onHomeClick={handleHomeClick}
        />
      </div>
      <div className='app'>
        {!state.isLoggedInUser ? (
          <LogInForm handleLogin={handleLogin} />
        ) : (
          <>
            {currentView === 'account' ? (
              <Account username={state.username} />
            ) : (
              <>
                <List todos={todos} setTodos={setTodos} completedTodos={completedTodos} />
                <PerformanceState completedTodos={completedTodos.length} totalTodos={totalTodos} />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
