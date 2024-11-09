
import { useState } from 'react';

const Exercise6 = () => {
    const handleClick = (event) => {
        event.preventDefault();
        alert('Link clicked, but default action prevented!');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh', 
            backgroundColor: '#f0f8ff', 
        }}>
            <div style={{
                padding: '20px',
                border: '2px solid #007BFF',
                borderRadius: '10px',
                backgroundColor: 'white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
                maxWidth: '300px', 
                width: '100%', 
                height: '20px', 
            }}>
                <a href="https://example.com" onClick={handleClick} style={{
                    textDecoration: 'none', 
                    color: '#007BFF', 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                }}>
                    Click me
                </a>
            </div>
        </div>
    );
};

export default Exercise6;