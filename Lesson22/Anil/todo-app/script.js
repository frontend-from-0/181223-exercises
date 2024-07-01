const sayHelloBtn = document.getElementById('btnSayHello');

sayHelloBtn.addEventListener('click', function (e) {
   document.getElementById('hi-bye-section').innerText = 'Hello';
  console.log('Hello', e);
});

const sayByeBtn = document.getElementById('btnSayBye');

sayByeBtn.addEventListener('click', function () {
   document.getElementById('hi-bye-section').innerText = 'Bye bye';
  console.log('Bye bye');
});

const form = document.getElementById('toDoForm');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
 // Usually you always need it for form submit events!
   event.preventDefault();

   const input = document.getElementById('toDoInput');

   const listItem = document.createElement('li');
   listItem.innerText = input.value;
   listItem.addEventListener('click', function () {
	   listItem.classList.toggle('completed');
   });
 // TODO: Make sure that only the text of todo item is crossed

   const button = document.createElement('button');
   button.innerText = 'x';
   button.addEventListener('click', function () {
	   listItem.remove();
   });

 listItem.append(button);
   // const ul = document.getElementById('todoList');
   // ul.append(listItem);
 document.getElementById('todoList').append(listItem);
 
 // TODO: clear input element
}
