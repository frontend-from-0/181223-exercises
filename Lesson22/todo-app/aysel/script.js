const form = document.getElementById('toDoForm');

form.addEventListener('submit', handleSubmit);
form.addEventListener('reset', handleReset);

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
  button.addEventListener('click', function () {
    listItem.remove();
  });

  listItem.append(textSpan);
  listItem.append(button);
  document.getElementById('todoList').append(listItem);
  
  input.value = '';
}
function handleReset(event) {
    event.preventDefault();
    document.getElementById('todoList').innerHTML = '';
  }






