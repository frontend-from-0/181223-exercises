import './styles.css';

export const HeadingS = ({ color, children }) => {
    const className = () => `headingS ${color ?? ''}`;
  
    return <h4 className={className()}>{children}</h4>;
  };