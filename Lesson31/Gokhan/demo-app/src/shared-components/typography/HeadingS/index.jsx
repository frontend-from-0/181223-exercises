import './styles.css';

export const HeadingS = ({ color, children }) => {

    return (
        <div className={`headingS ${color}`}>
            {children}
        </div>

    );
};