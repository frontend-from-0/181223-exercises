import { useState } from 'react';

export const Exercise5 = () => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    const handleClick = (event) => {
        setCoordinates({ x: event.clientX, y: event.clientY });
    };
    

    return (
        <div>
            <button onClick={handleClick}>Show Mouse Coordinates</button>
            <p>X: {coordinates.x}, Y: {coordinates.y}</p>
        </div>
        
    );
};

