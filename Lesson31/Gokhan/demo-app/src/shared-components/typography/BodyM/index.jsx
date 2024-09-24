import './styles.css';

export const BodyM = ({ color, children }) => {

    return (
        <p className={`bodyM ${color}`}>
            {children}
        </p>

    );
};