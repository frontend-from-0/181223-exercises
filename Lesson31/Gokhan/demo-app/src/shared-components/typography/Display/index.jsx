import './styles.css';

// export const Display = ({ color }) => {
//     const className = () => `display ${color}`;
//     return <title className={className()}>Display</title>
// }

export const Display = ({ color, children }) => {
    return (
        <div className={`display ${color}`}>
            {children}
        </div>
    );
};