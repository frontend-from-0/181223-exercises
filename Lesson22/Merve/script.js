const form = document.getElementById('toDoForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const input = document.getElementById('toDoInput');
    const errorMsg = document.getElementById('errorMsg');

    if (input.value.trim() === '') {
        errorMsg.innerText = 'Please enter a todo item.';
        errorMsg.style.display = 'block'; 
        return;
    }
    const listItem = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = input.value;  
    textSpan.addEventListener('click', function () {
        textSpan.classList.toggle('completed');  
    });

    listItem.appendChild(textSpan);  

    const button = document.createElement('button');
    button.textContent = 'x';
    button.addEventListener('click', function (e) {
        listItem.remove();  
        e.stopPropagation();  
    });

    listItem.appendChild(button);  

    
    const ul = document.getElementById('todoList');
    ul.appendChild(listItem);

  
    input.value = '';
}

const sayHelloBtn = document.getElementById('btnSayHello');

sayHelloBtn.addEventListener('click', function (e) {
  console.log('Hello', e);
  alert('Hello! Welcome and Enjoy.')
});

const sayByeBtn = document.getElementById('btnSayBye');

sayByeBtn.addEventListener('click', function (e) {
   console.log('Goodbye', e);
   alert('Goodbye! Wish You the Best.')
 });
