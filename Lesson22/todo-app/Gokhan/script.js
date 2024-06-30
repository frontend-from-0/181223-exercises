// const sayHelloBtn = document.getElementById('btnSayHello');

// sayHelloBtn.addEventListener('cli('ck', function (e) {
//   console.log('Hello', e);
// });

// const sayByeBtn = document.getElementById('btnSayBye');

// sayByeBtn.addEventListener('click', function () {
//   console.log('Bye bye');
// });

const form = document.getElementById('toDoForm');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

	// Usually you always need it for form submit events!

	event.preventDefault();

	const input = document.getElementById('toDoInput');

	const listItem = document.createElement('li');
	const spanElement = document.createElement('span');
	spanElement.innerText = input.value;
	
	listItem.append(spanElement);
	listItem.addEventListener('click', function () {
		listItem.classList.toggle('completed');
	});
	
		// H E L P :)
		// I could't do anything about cross. How can i do that?

	// TODO: Make sure that only the text of todo item is crossed

	const button = document.createElement('button');
	button.innerHTML = '&#128465';
	button.style.fontSize = '16px';
	button.style.color = 'red';
	button.style.backgroundColor = '#fff';
	button.style.width = '40px';
	button.style.height = '30px';
	button.style.borderRadius = '10px';
	button.style.borderColor = 'red';
	button.addEventListener('click', function () {
		listItem.remove();
	});

	button.addEventListener('mouseover', function () {
		button.style.color = '#fff';
		button.style.backgroundColor = 'red';
	});

	button.addEventListener('mouseout', function () {
		button.style.color = 'red';
		button.style.backgroundColor = '#fff';
	});

	listItem.append(button);

	const ul = document.getElementById('todoList');
	ul.append(listItem);

	/*document.getElementById('todoList').append(listItem);*/

	// TODO: clear input element
}