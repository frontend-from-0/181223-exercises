import './styles.css';

export const BodyM = ({ color, children }) => {
  const className = () => `bodyM ${color ?? ''}`;

  return <p className={className()}>{children}</p>;
};