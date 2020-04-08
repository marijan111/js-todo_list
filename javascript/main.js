let newInputTodo = '';
let todo1 = '';

function newInput() {
  newInputTodo = document.getElementById('newTodo').value;
}

function addTodo() {
  let li = document.createElement('li');
  li.innerHTML = todo1;
  if (todo1 === '') {
    todo1 = newInputTodo;
  } else {
    console.log('You already added that item to your todo list.');
  }
  document.body.appendChild(li);
}
