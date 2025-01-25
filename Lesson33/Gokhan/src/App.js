import { List } from "./components/List";
import { Navbar } from "./components/Navbar";
import { Account } from "./components/Account";
import { PerformanceState } from "./components/PerformanceState";
import { todoData } from "./data";
import { useState } from "react";
import { LogIn } from "./components/LogIn";
import "./App.css";


export const Pages = {
  ACCOUNT: "account",
  LIST: "list",
  LOGIN: "login",
};

export const App = () => {
  const [currentPage, setCurrentPage] = useState(Pages.LOGIN);
  const [todos, setTodos] = useState(todoData);

  const completedTodos = todos.filter((todo) => todo.completed);

  return (
      <div className="container">
        <Navbar
          setCurrentPage={setCurrentPage}
        />
      

      <div className="app">
        {currentPage === Pages.LOGIN && <LogIn setCurrentPage={setCurrentPage} />}
        {currentPage === Pages.ACCOUNT && <Account />}
        {currentPage === Pages.LIST && (
          <>
            <PerformanceState
              completedTodos={completedTodos.length ?? 0}
              totalTodos={todos.length}
            />
            <List
              todos={todos}
              setTodos={setTodos}
              complateTodos={completedTodos}
            />
          </>
        )}
      </div>
			</div>
  );
};
