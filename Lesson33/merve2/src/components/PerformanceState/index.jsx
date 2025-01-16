
import './styles.css';

export const PerformanceState = ({ totalTodos, completedTodos }) => {
    return (
        <div className="performance-state">
            <h2>Performance State</h2>
            <p>Total Todos: {totalTodos}</p>
            <p>Completed Todos: {completedTodos}</p>
        </div>
    );
};