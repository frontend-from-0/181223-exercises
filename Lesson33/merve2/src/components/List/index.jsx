import {useState} from 'react';
import {todoData} from '../../data';
import './styles.css';



export const List = ({ todos, setTodos }) => {
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} className="todo-item">
                    <span className={todo.completed ? 'completed' : ''}>
                        {todo.text}
                    </span>
                    <button 
                        className={todo.completed ? 'undo' : 'complete'} 
                        onClick={() => toggleComplete(todo.id)}
                    >
                        {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                </li>
            ))}
        </ul>
    );
};