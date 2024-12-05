
import React from 'react';

const Exercise10 = () => {
    const handleDoubleClick = () => {
        alert('Button was double-clicked!');
    };

    return (
        <button onDoubleClick={handleDoubleClick}>
            Double Click Me
        </button>
    );
};

export default Exercise10;