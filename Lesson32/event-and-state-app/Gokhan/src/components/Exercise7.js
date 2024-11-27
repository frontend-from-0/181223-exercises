import { useEffect } from 'react';

export const Exercise7 = () => {

    useEffect(() => {
        const parent = document.getElementById('parent');
        const child = document.getElementById('child');

        parent.addEventListener('click', function () {
            console.log('Parent Element Clicked');
        });

        child.addEventListener('click', function (event) {
            console.log('Child Element Clicked');
        });
    });

    return (
        <>
            <div id="parent">Parent Element</div>
            <div id="child">Child Element</div>
        </>
    );

};

export default Exercise7;