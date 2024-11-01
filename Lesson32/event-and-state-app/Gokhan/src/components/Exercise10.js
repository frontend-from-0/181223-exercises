import { useEffect } from 'react';

export const Exercise10 = () => {

    const handleDoubleClick = () => {
        console.log('The Button Was Double Clicked');
    };

    useEffect(() => {

    }, []);

    return (
        <>
            <button onDoubleClick={handleDoubleClick}>Please Double Click The Button</button>
        </>
    );

};