import {useState} from 'react';

export const Exercise1 = () => {
  // const [state, setState] = useState(defaultValue);
  const [buttonLabel, setButtonLabel] = useState('Click me!');

  function handleClick() {
    console.log('Button clicked');
    setButtonLabel('Clicked!');
  }

  return <button onClick={handleClick}>{buttonLabel}</button>
};