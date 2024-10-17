import React from 'react';

export const Exercise6 = () => {

    const handleClick = (event) => {
        event.preventDefault();
        alert('Default Link Prevented');
    };

    return (
        <>
            <a href="https://unsplash.com/?utm_source=medium&utm_medium=referral" onClick={handleClick}>Click For Exercise6</a>
        </>
    );

};

export default Exercise6;