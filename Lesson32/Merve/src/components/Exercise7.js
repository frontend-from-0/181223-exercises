export const Exercise7 = ({ onClick, children }) => {
    return (
        <div className="parent" onClick={onClick}>
            Parent Element
            {children} {}
        </div>
    );
};

