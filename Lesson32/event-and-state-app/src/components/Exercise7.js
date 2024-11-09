
import { useState } from 'react';

const Exercise7 = () => {
    const handleParentClick = () => {
        alert('Parent clicked!');
    };

    const handleChildClick = (event) => {
        alert('Child clicked!');
        event.stopPropagation();
    };

    return (
        <div 
            onClick={handleParentClick} 
            style={{
                padding: '20px',
                border: '2px solid #007BFF',
                borderRadius: '10px',
                backgroundColor: '#f0f8ff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
                maxWidth: '400px', 
                margin: '50px auto', 
            }}
        >
            <h2>Parent Element</h2>
            <div 
                onClick={handleChildClick} 
                style={{
                    padding: '10px',
                    border: '1px solid #0056b3F',
                    borderRadius: '5px',
                    backgroundColor: '#007BFF',
                    marginTop: '10px', 
                }}
            >
                <h3>Child Element</h3>
            </div>
        </div>
    );
};

export default Exercise7;