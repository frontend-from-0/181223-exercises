import React, { useState } from 'react';

function Exercise8() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item} 
                    <button onClick={() => removeItem(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
}

export default Exercise8;