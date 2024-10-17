import { useEffect } from 'react';

export const Exercise10 = () => {

    useEffect(() => {
        const dblClickBtn = document.getElementById('dblClickBtn');

        const handleDoubleClick = () => {
            console.log('The Button Was Double-Clicked');
        };

        dblClickBtn.addEventListener('dblclick', handleDoubleClick);

        return () => {
            dblClickBtn.removeEventListener('dblclick', handleDoubleClick);
        };
    }, []);

    return (
        <>
            <button id="dblClickBtn">Please Double Click The Button</button>
        </>
    );

};