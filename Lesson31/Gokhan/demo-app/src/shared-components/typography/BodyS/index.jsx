import './styles.css';

export const BodyS = ({ color }) => {
    const className = () => `bodyS ${color}`;
    return <h4 className={className()}>Pick a subject to get started.</h4>
};