import { useState } from 'react';

export const Exercise8 = () => {
    const [todos, setTodos] = useState([
        'Finish the assignments',
        'Study JS on freetime',
        'Learn React',
    ]);

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>To Do List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};