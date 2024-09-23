import { Exercise1 } from './components/Exercise1';
import { Exercise2 } from './components/Exercise2';
import { Exercise3 } from './components/Exercise3';
import Exercise4 from './components/Exercise4';
import { Exercise4v2 } from './components/Exercise4';
import { Exercise5 } from './components/Exercise5';
import { Exercise6 } from './components/Exercise6';
import { Exercise7 } from './components/Exercise7';
import { Exercise8 } from './components/Exercise8';
import { Exercise9 } from './components/Exercise9';
import { Exercise10 } from './components/Exercise10';

const itemsArray = ['apple', 'banana', 'pineapple'];
const all = itemsArray.map((item) => (
	<Exercise4 key={item} item={item} />
));

const onClick = (e) => {
	console.log('Parent clicked');
};
const handleChildClick = (e) => {
	e.stopPropagation();
	console.log('Child clicked');
};

function App() {
	return (
		<div className='App'>
			<Exercise1 />
			<Exercise2 />
			<Exercise3 />
			<ul>
				{all}
			</ul>
			<Exercise4v2 />
			<Exercise5>
				{({ coordinates, tracking, startTracking, stopTracking }) => (
					<div className="mouse-tracker">
						<h2>Mouse Coordinates Tracker</h2>
						<p>X: {coordinates.x}, Y: {coordinates.y}</p>
						<button onClick={tracking ? stopTracking : startTracking}>
							{tracking ? 'Stop Tracking' : 'Start Tracking'}
						</button>
					</div>
				)}
			</Exercise5>
			<Exercise6>
				Click me
			</Exercise6>
			<Exercise7 onClick={onClick}>
				<div className="child" onClick={handleChildClick}>
					Child Element
				</div>
			</Exercise7>
			<Exercise8 />
			<Exercise9 />
			<Exercise10 />

		</div>
	);
}

export default App;
