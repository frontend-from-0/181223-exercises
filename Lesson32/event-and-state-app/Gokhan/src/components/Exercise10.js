export const Exercise10 = () => {

    const handleDoubleClick = () => {
        console.log('The Button Was Double Clicked');
    };

    return (
        <button onDoubleClick={handleDoubleClick}>Please Double Click The Button</button>
    );

};