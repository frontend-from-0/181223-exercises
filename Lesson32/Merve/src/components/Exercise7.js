const ChildComponent = () => {
    const handleChildClick = () => {
        console.log("Child clicked");
    };

    return <div className="child" onClick={handleChildClick}>Child Component</div>;
};

const handleClick = () => {
    console.log("Parent clicked");
}

export const Exercise7 = () => {
    return (
        <div className="parent" onClick={handleClick}>
            Parent Element
            <ChildComponent />
        </div>
    );
};

