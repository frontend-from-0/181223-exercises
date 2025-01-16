export const Exercise6 = ({ children }) => {
    const handleClick = (event) => {
    
      event.preventDefault();
      console.log("Link clicked, but default action prevented!");
    };
  
    return (
      <a href="https://example.com" onClick={handleClick}>
        {children}
      </a>
    );
  };