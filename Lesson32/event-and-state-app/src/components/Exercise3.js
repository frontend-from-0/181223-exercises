import { useState } from 'react';

export const Exercise3 = () => {
	const [count, setCount] = useState(0);
  
	function handleClick() {
		setCount((prevValue) => prevValue + 1);
	}

	return (
		<div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={handleClick}>Increment count value</button>
            <p style={{ fontSize: '48px', fontWeight: 'bold' }}>{count}</p> 
        </div>
	);
};
