import './styles.css';

export const List = ({ todos, setTodos }) => {

	const handleClick = (id) => {
		setTodos(prevState =>
			prevState.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};
	const completedTodos = todos.filter(todo => todo.completed);
	return (
		<div>
			<h2>Todo List</h2>
			<ul className='todo__list'>
				{todos.map((item) => (
					<li onClick={() => handleClick(item.id)} key={item.id}>
						<span className={item.completed ? 'completed' : ''}>
							{item.title}
						</span>
						<button className={`btn ${item.completed ? 'completed' : ''}`} onClick={() => handleClick(item.id)}>X</button>
					</li>
				))}
			</ul>
			<h3>Completed Todos</h3>
			<ul class='completed-todos'>
				{completedTodos.length > 0 ? (
					completedTodos.map(item => <li key={item.id}>{item.title}</li>)
				) : (
					<li class='done-tasks'>No completed todos</li>
				)}
			</ul>
		</div>
	);
};