import { useState } from 'react';

export const Exercise5 = () => {
  
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleClick = () => {
    console.log(`Coordinates: ${coordinates.x}, ${coordinates.y}`);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <button onClick={handleClick}>Get Coordinates</button>
      <p>Coordinates:{coordinates.x}, {coordinates.y}</p>

    </div>
  );
};