import {useState} from 'react';
import {todoData} from '../../data';
import './styles.css';

export const List = () => {
	const [todos, setTodos] = useState(todoData);

	function handleClick (id) {
		setTodos(prevState => prevState.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
	};

	return (
		<ul className='todo__list'>
			{todos.map((item) => (
				<li onClick={() => handleClick(item.id)} key={item.id}>
					<span className={item.completed ? 'completed' : ''}>
						{item.title}
					</span>
					<button className={'btn'}>X</button>
				</li>
			))}
		</ul>
	);
};