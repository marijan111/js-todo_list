let newInputTodo = '';
let todoItem = document.getElementsByClassName('todo-item');

//When you write something in input it gets saved as variable newInputTodo
function newInput() {
  newInputTodo = document.getElementById('newTodo').value;
}

//On Add To Your List button click this function creates a new list element
function addTodo() {
  let list = document.getElementById('todo-list');
  let li = document.createElement('li');
  let removeBtn = document.createElement('i');

  li.appendChild(document.createTextNode(newInputTodo));
  li.setAttribute('class', 'list-group-item todo-item');
  removeBtn.setAttribute('class', 'fas fa-trash-alt remove-btn');
  removeBtn.addEventListener('click', removeItem);
  li.appendChild(removeBtn);
  list.appendChild(li);
}
