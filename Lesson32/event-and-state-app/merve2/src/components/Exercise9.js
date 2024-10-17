
import { useState } from 'react';

function Exercise9() {
    const [bgColor, setBgColor] = useState('white'); 

    const handleButtonClick = (color) => {
        setBgColor(color); 
    };

    return (
        <div style={{ backgroundColor: bgColor, padding: '20px' }}>
            <h2>Choose a Background Color</h2>
            <button onClick={() => handleButtonClick('red')}>Red</button>
            <button onClick={() => handleButtonClick('blue')}>Blue</button>
            <button onClick={() => handleButtonClick('green')}>Green</button>
            <button onClick={() => handleButtonClick('yellow')}>Yellow</button>
        </div>
    );
}

export default Exercise9;