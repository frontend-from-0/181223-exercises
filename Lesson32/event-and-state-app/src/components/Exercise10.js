
import { useState } from 'react';

const Exercise10 = () => {
    const handleDoubleClick = () => {
        alert('Button was double-clicked!');
    };

    return (
        <div>
            <button onDoubleClick={handleDoubleClick}>
                Double Click Me
            </button>
        </div>
    );
};

export default Exercise10;