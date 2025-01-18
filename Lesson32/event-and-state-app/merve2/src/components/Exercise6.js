import React from 'react';

const Exercise6 = () => {
    const handleClick = (event) => {
        event.preventDefault();
        alert('Default action prevented!');
    };

    return (
        <div>
            <a href="https://example.com" onClick={handleClick}>Click me</a>
        </div>
    );
};

export default Exercise6;