
import { useState } from 'react';

const Exercise9 = () => {
    const [bgColor, setBgColor] = useState('white');

    const handleButtonClick = (color) => {
        setBgColor(color);
    };

    return (
        <div style={{ backgroundColor: bgColor, padding: '20px', textAlign: 'center' }}>
            <h2>Choose a Background Color</h2>
            <button onClick={() => handleButtonClick('lightblue')}>Light Blue</button>
            <button onClick={() => handleButtonClick('lightgreen')}>Light Green</button>
            <button onClick={() => handleButtonClick('lightcoral')}>Light Coral</button>
            <button onClick={() => handleButtonClick('lightyellow')}>Light Yellow</button>
        </div>
    );
};

export default Exercise9;