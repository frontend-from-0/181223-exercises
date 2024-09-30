import './App.css';
import { HeadingL } from './shared-components/typography/HeadingL';
import { HeadingM } from './shared-components/typography/HeadingM';
import { HeadingS } from './shared-components/typography/HeadingS';
import { BodyS } from './shared-components/typography/BodyS';
import { BodyM } from './shared-components/typography/BodyM';
import { Display} from './shared-components/typography/Display';


// Name your React component with capitalised first letter (PascalCase)
export function App() {
	//const condition = true;

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
			<HeadingM color='dark-navy'>Lorem ipsum dolor</HeadingM>
			<HeadingS color='dark-navy'>Lorem ipsum dolor</HeadingS>
			<BodyS color='grey-navy'>Pick a subject to get started.</BodyS>
			<BodyM color='dark-navy'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</BodyM>
			<Display color='dark-navy'>Lorem</Display>
			
		</div>
	);
}
