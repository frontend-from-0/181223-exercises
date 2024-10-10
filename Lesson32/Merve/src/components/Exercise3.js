import { useState } from 'react';

export const Exercise3 = () => {
	const [count, setCount] = useState(0);
  
	function handleClick() {
		setCount((prevValue) => prevValue + 1);
	}

	return (
		<>
			<button onClick={handleClick}>Increment count value</button>
			<p>{count}</p>
		</>
	);
};
