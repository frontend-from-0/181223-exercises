import { useState } from 'react';

export const Exercise5 = () => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    const handleClick = (event) => {
        setCoordinates({ x: event.clientX, y: event.clientY });
    };

    return (
        <>
            <button onClick={handleClick}>Mouse Coordinates</button>
            <p>MouseX: {coordinates.x} MouseY: {coordinates.y}</p>
        </>
    );
};

export default Exercise5;