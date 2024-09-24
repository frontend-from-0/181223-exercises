import './styles.css';

export const HeadingS = ({ color, children }) => {

    return (
        <h3 className={`headingS ${color}`}>
            {children}
        </h3>

    );
};