import './styles.css';

export const HeadingL = ({ isBold, color, children }) => {
  const className = () => `headingL ${isBold ? 'headingL--bold': ''} ${color ?? ''}`;

	return <h2 className={className()}>{children}</h2>;
};

console.log(HeadingL);
//ES7+ React/Redux/React-Native Snippets:

//This extension provides auto-import for React, Redux, 
//and other popular JavaScript/React libraries, along with useful snippets.