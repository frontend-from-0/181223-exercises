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
  const { dispatch } = useContext(UserDispatchContext);
  const [todos, setTodos] = useState(todoData);

  const handleSignIn = (username) => {
    dispatch({ type: 'LOGIN', payload: { username } });
    setTodos(todoData);
  };

  const handleSignOut = () => {
    dispatch({ type: 'LOGOUT' });
    setTodos([]);
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const totalTodos = todos.length;

  return (
    <><div className='container'>
      <Navbar isLoggedInUser={user.isLoggedInUser} dispatch={dispatch} />
    </div><div className='app'>
        {!user.isLoggedInUser ? (
          <LogInForm handleSignIn={handleSignIn} />
        ) : (
          <>
            {user.currentView === 'account' ? (
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
