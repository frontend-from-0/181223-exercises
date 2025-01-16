import { useState } from "react";

export const Exercise9 = () => {
    const [bgColor, setBgColor] = useState('white');

    const handleButtonClick = (color) => {
        setBgColor(color);
    };
    return (
        <div className={`exercise9 ${bgColor}`}>
            <button onClick={() => handleButtonClick('purple')}>Purple</button>
            <button onClick={() => handleButtonClick('lightgreen')}>Green</button>
            <button onClick={() => handleButtonClick('lightcoral')}>Coral</button>
            <button onClick={() => handleButtonClick('greyblue')}>GreyBlue</button>
        </div>
    );
};