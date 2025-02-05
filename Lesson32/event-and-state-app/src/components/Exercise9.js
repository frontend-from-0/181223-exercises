
import { useState } from 'react';

const Exercise9 = () => {
    const [bgColor, setBgColor] = useState('white');

    const handleButtonClick = (color) => {
        setBgColor(color);
    };

    return (
        <div style={{ backgroundColor: bgColor, padding: '20px', textAlign: 'center' }}>
            <h2>Choose a Background Color</h2>
            <button 
                onClick={() => handleButtonClick('lightblue')} 
                style={{ margin: '5px' }} 
            >
                Light Blue
            </button>
            <button 
                onClick={() => handleButtonClick('lightgreen')} 
                style={{ margin: '5px' }} 
            >
                Light Green
            </button>
            <button 
                onClick={() => handleButtonClick('lightcoral')} 
                style={{ margin: '5px' }} 
            >
                Light Coral
            </button>
            <button 
                onClick={() => handleButtonClick('lightyellow')} 
                style={{ margin: '5px' }} 
            >
                Light Yellow
                </button>
        </div>
    );
};

export default Exercise9;