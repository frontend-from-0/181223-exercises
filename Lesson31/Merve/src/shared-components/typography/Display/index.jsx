import './styles.css';

export const Display = ({ color, children }) => {
  const className = () => `display ${color ?? ''}`;

  return <h1 className={className()}>{children}</h1>;
};