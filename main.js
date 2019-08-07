// Make your global array here.
// Put a few todos in there to start with!
// This is mostly for testing purposes.
// let todos = [
//   `Be able to mark todos "done".`,
//   `Allow user interaction through the DOM`,
//   `Add dates to todos.`,
// ];

// let completed = [
//   false,
//   false,
//   false,
// ]



// Or the ALTERNATE method:
let todos = [
  [`Be able to mark todos "done".`, false],
  [`Allow user interaction through the DOM`, false],
  [`Add dates to todos.`, false],
]
  

printList();

// A function that prints a todo.
// For now, just console log it!
function printTodo(todo) {
  const ol = document.querySelector('.todo-list');
  
  const li = document.createElement('li');
  li.innerText = todo;

  ol.appendChild(li);
}

// A function that prints everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above function!
function printList() {
  let i = 0;
  while (i < todos.length) {
    // printTodo(todos[i]);
    // Or, for tuples:
    printTodo(todos[i][0])

    i = i + 1;
  }
}

// A function that adds an item to our todo list.
// Where on the list should we add it?
function addTodo(todo) {
  // todos.push(todo);
  // completed.push(false);

  // Or, using tuples:
    todos.push([todo, false]);
}

// A function that removes an item at a given index from our todo list.
function removeTodo(i) {
  todos.splice(i, 1);

  // Unneeded (and an error!) if using tuples:
  // completed.splice(i, 1);
}


const addButton = document.querySelector('.add-todo');
addButton.onclick = addToList;

function addToList() {
  const inputBox = document.querySelector('.todo-input');
  const userInput = inputBox.value;
  addTodo(userInput);
  printTodo(userInput);
  inputBox.value = '';
}

const completeButton = document.querySelector('.mark-todo-complete');
completeButton.onclick = handleMark;

function handleMark() {
  const inputBox = document.querySelector('.number-input');
  const userInput = Number(inputBox.value);
  markComplete(userInput);
  printMark(userInput);
}

function markComplete(number) {
  // completed[number - 1] = true;
  // Or, for tuples:
  todos[number - 1][1] = true;
}

function printMark(number) {
  const li = document.querySelector(`li:nth-child(${number})`);
  li.style.textDecoration = 'line-through';
}

const deleteButton = document.querySelector('.delete-completed-todos');
deleteButton.onclick = handleDelete;

function handleDelete() {
  const newTodos = [];
  // The next line is unnecessary for tuples:
  // const newCompleted = [];

  for (let i = 0; i < todos.length; i++) {
    // if (completed[i] === false) {
    //   newTodos.push(todos[i]);
    //   newCompleted.push(false);
    // }
    // Alternate if statement for tuples:
    
    if (todos[i][1] === false) {
      newTodos.push(todos[i]);
    }
    
  }
  todos = newTodos;

  // Unnecessary for tuples:
  // completed = newCompleted;

  clearList();
  printList();
}


function clearList() {
  // Grab the todo list ul and put it in a variable
  const list = document.querySelector('.todo-list');

  // Remove all children of that list.
  // My favorite way uses `.hasChildNodes()` and `.remove()` and `.firstChild`, but there are other ways if you wanna research them instead!
  while (list.hasChildNodes()) {
    list.firstChild.remove();
  }
}
