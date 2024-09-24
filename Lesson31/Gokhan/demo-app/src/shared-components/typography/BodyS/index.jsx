import './styles.css';

export const BodyS = ({ color }) => {
    const className = () => `bodyS ${color}`;
    return <p className={className()}>Pick a subject to get started.</p>
};