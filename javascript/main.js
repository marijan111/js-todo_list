let newInputTodo = '';
let todoItem = document.getElementsByClassName('todo-item');
let list = document.getElementById('todo-list');
let removeBtn = document.getElementsByClassName('remove-btn');

// When you write something in input it gets saved as variable newInputTodo
function newInput() {
  newInputTodo = document.getElementById('newTodo').value;
}

// On Add To Your List button click this function creates a new list element
function addTodo() {
  if (newInputTodo !== '') {
    // creates new li element
    let li = document.createElement('li');
    // adds class attribute to that li element
    li.classList.add('list-group-item', 'todo-item');
    // writes some html inside that li element
    li.innerHTML = `${newInputTodo}<i class="fas fa-trash-alt remove-btn" onclick="removeItem()"></i>`;
    // append that li element to ul list with id todo-list
    list.appendChild(li);
  }
}

function removeItem() {}
