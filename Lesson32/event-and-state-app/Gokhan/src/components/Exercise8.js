import { useState } from 'react';

// TODO list with useState
export const Exercise8 = () => {
    const [todos, setTodos] = useState([
        { id: 1, label: 'TODO 1' },
        { id: 2, label: 'TODO 2' },
        { id: 3, label: 'TODO 3' },
        { id: 4, label: 'TODO 4' },
    ]);

    // Function for delete
    const removeTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>To Do List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.label}
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// import { useState } from 'react';

// export const Exercise8 = () => {
//     const [todos, setTodos] = useState([
//         { id: Date.now(), label: 'Finish the assignments' },
//         { id: Date.now() + 1, label: 'Study JS on freetime' },
//         { id: Date.now() + 2, label: 'Learn React' },
//     ]);

//     const removeTodo = (id) => {
//         const newTodos = todos.filter(todo => todo.id !== id);
//         setTodos(newTodos);
//     };

//     return (
//         <div>
//             <h1>To Do List</h1>
//             <ul>
//                 {todos.map((todo) => (
//                     <li className="todo-item" key={todo.id}>
//                         {todo.label}
//                         <button className="remove-button" onClick={() => removeTodo(todo.id)}>Remove</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };