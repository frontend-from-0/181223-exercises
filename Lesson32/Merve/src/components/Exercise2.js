import { useState } from 'react';

export const Exercise2 = () => {
	const [label, setLabel] = useState('On');

	function handleClick() {
		// if (label === 'On') {
		// 	setLabel('Off');
		// } else {
		// 	setLabel('On');
		// }

		setLabel((prevValue) => 
			prevValue === 'On' ? setLabel('Off') : setLabel('On'),
		);
	}

	return <button onClick={handleClick}>{label}</button>;
};
