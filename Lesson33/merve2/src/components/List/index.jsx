

import './styles.css'; 

export const List = ({ todos, setTodos }) => {
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div className="list-container"> 
            <h2>Todo List</h2>
            {todos.map(todo => (
                <div 
                    key={todo.id} 
                    className={`todo-item ${todo.completed ? 'completed' : ''}`} 
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.text}
                </div>
            ))}
        </div>
    );
};