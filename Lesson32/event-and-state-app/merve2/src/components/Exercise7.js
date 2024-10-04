import React from 'react';

const Exercise7 = () => {
    const handleParentClick = () => {
        alert('Parent clicked!');
    };

    const handleChildClick = (event) => {
        event.stopPropagation(); // Olayın yayılmasını durdur
        alert('Child clicked!');
    };

    return (
        <div onClick={handleParentClick} style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            Parent Element
            <div onClick={handleChildClick} style={{ padding: '10px', backgroundColor: '#c0c0c0' }}>
                Child Element
            </div>
        </div>
    );
};

export default Exercise7;