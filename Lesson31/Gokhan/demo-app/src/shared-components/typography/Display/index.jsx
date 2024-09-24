import './styles.css';

export const Display = ({ color, children }) => {
    return (
        <h1 className={`display ${color}`}>
            {children}
        </h1>
    );
};