import './styles.css';

export const HeadingM = ({ color, children }) => {
    const className = () => `headingM ${color ?? ''}`;
  
    return <h3 className={className()}>{children}</h3>;
  };