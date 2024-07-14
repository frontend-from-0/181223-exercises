const form = document.getElementById('toDoForm');

form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
  event.preventDefault();

  const input = document.getElementById('toDoInput');

  const listItem = document.createElement('li');
  const textSpan = document.createElement('span');
  textSpan.innerText = input.value;
  listItem.addEventListener('click', function () {
    textSpan.classList.toggle('completed');
  });

  const button = document.createElement('button');
  button.innerText = 'x';
  button.classList.add('button--light');
  button.addEventListener('click', function () {
    listItem.remove();
  });

  listItem.append(textSpan);
  listItem.append(button);
  document.getElementById('todoList').append(listItem);
  
  input.value = '';
}

document.getElementById('clearList').addEventListener('click', function () {
  document.getElementById('todoList').innerHTML = '';
});






