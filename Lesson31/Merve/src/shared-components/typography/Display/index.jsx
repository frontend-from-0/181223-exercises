import './styles.css';

export const Display = ({ color, children }) => {
  const className = () => `display ${color ?? ''}`;

  return <p className={className()}>{children}</p>;
};