// Make your global array here.
// Put a few todos in there to start with!
// This is mostly for testing purposes.
const todos = [
  `Be able to mark todos "done".`,
  `Allow user interaction through the DOM`,
  `Add dates to todos.`,
];

const completed = [
  false,
  false,
  false,
]

// Or the ALTERNATE method:
/*
const todos = [
  [`Be able to mark todos "done".`, false],
  [`Allow user interaction through the DOM`, false],
  [`Add dates to todos.`, false],
]

*/

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
    printTodo(todos[i]);
    i = i + 1;
  }
}

// A function that adds an item to our todo list.
// Where on the list should we add it?
function addTodo(todo) {
  todos.push(todo);
  completed.push(todo);

  /*
    Using tuples:

    todos.push([todo, false]);
  */
}

// A function that removes an item at a given index from our todo list.
function removeTodo(i) {
  todos.splice(i, 1);

  // Unneeded if using tuples:
  completed.splice(i, 1);
}



