
import { useState } from 'react';

const Exercise8 = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const handleRemove = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item} 
                        <button onClick={() => handleRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Exercise8;