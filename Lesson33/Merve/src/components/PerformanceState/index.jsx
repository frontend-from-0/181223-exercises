import './styles.css';

export const PerformanceState = ({ completedTodos, totalTodos }) => {
	return <div className='numof_doneTask'>{`Completed ${completedTodos} of ${totalTodos}`}</div>;
};

