import './styles.css';

export const HeadingL = ({ isBold, color, children }) => {
  const className = () => `headingL ${isBold ? 'headingL--bold' : ''} ${color ?? ''}`;

  return <h2 className={className()}>{children}</h2>;
};