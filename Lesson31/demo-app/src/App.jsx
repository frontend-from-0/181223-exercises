import './App.css';
import { HeadingL } from './shared-components/typography/HeadingL';
import { HeadingM } from './shared-components/typography/HeadingM';

// Name your React component with capitalised first letter (PascalCase)
export function App() {
	const condition = true;

	const handleClick = () => {
		console.log('Button Clicked (external function)');
	};

	// JSX - JavaScript XML
	return (
		<div className='App'>
			<HeadingL color='dark-navy'>Welcome to the</HeadingL>
			<HeadingL isBold color='dark-navy'>
				Frontend Quiz!
			</HeadingL>
			<HeadingM title='Example HeadingM text' />
		</div>
	);
}
