import './styles.css';

export const BodyS = ({ color, children }) => {
    const className = () => `bodyS ${color ?? ''}`;
    return <p className={className()}>{children}</p>
};