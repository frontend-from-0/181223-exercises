import './App.css';
import { HeadingL } from './shared-components/typography/HeadingL';
import { HeadingM } from './shared-components/typography/HeadingM';
import { HeadingS } from './shared-components/typography/HeadingS';
import { Display } from './shared-components/typography/Display';
import { BodyM } from './shared-components/typography/BodyM';
import { BodyS } from './shared-components/typography/BodyS';

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
			<Display />
			<HeadingS />
			<BodyM />
			<BodyS />
		</div>
	);
}
