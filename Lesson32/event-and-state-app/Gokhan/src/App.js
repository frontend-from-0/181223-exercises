import { Exercise1 } from './components/Exercise1';
import { Exercise2 } from './components/Exercise2';
import { Exercise3 } from './components/Exercise3';
import Exercise4 from './components/Exercise4';
import { Exercise4v2 } from './components/Exercise4';


const itemsArray = ['apple', 'banana', 'pineapple'];
const all = itemsArray.map((item) => (
  <Exercise4 key={item} item={item} />
));

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
		</div>
	);
}

export default App;
