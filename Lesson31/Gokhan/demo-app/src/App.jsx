import './App.css';
import { HeadingL } from './shared-components/typography/HeadingL';
import { BodyS } from './shared-components/typography/BodyS';
import { Display } from './shared-components/typography/Display';
import { HeadingS } from './shared-components/typography/HeadingS';
import { BodyM } from './shared-components/typography/BodyM';

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
			<HeadingL isBold color='dark-navy'>Frontend Quiz!</HeadingL>
			<BodyS color='grey-navy'>Pick a subject to get started.</BodyS>
			<Display color='grey-navy'>Display</Display>
			<HeadingS color='grey-navy'>Heading S</HeadingS>
			<BodyM color='grey-navy'>Body M</BodyM>
		</div>

	);
};
