
import { useState } from 'react';

const Exercise5 = () => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    const handleClick = (event) => {
        setCoordinates({ x: event.clientX, y: event.clientY });
    };

    return (
        <div 
            onClick={handleClick} 
            style={{
                height: '100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: '#f0f8ff'
            }}
        >
            <div style={{
                padding: '20px',
                border: '2px solid #007BFF',
                borderRadius: '10px',
                backgroundColor: 'white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
                maxWidth: '400px', 
                width: '100%', 
            }}>
                <h1>Click to Get Coordinates</h1>
                <h2>Coordinates:</h2>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>X: {coordinates.x}</p>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Y: {coordinates.y}</p>
            </div>
        </div>
    );
};
export default Exercise5;