
import { useState } from 'react';

const Exercise7 = () => {
    const handleParentClick = () => {
        alert('Parent clicked!');
    };

    const handleChildClick = (event) => {
        alert('Child clicked!');
        event.stopPropagation(); // Olayın ebeveyn öğeye yayılmasını engelle
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