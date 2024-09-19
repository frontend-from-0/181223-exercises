import './styles.css';

export const BodyM = ({ color, children }) => {

    return (
        <div className={`bodyM ${color}`}>
            {children}
        </div>

    );
};