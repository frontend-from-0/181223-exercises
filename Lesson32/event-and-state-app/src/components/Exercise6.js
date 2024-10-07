
import { useState } from 'react';

const Exercise6 = () => {
    const handleClick = (event) => {
        event.preventDefault();
        alert('Link clicked, but default action prevented!');
    };

    return (
        <div>
            <a href="https://example.com" onClick={handleClick}>
                Click me
            </a>
        </div>
    );
};

export default Exercise6;