
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
            <ul style={{ padding: '0', listStyleType: 'none' }}>
                {items.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}> 
                        {item} 
                        <button 
                            onClick={() => handleRemove(index)} 
                            style={{ marginLeft: '10px' }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Exercise8;