// Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear all tasks event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Add task
function addTask(event) {
  if (taskInput.value.trim() === '') {
    alert('Add a task');
  } else {
    // Create new li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    // Clear input
    taskInput.value = '';
    // Prevent default form event
    event.preventDefault();
  }
}

// Remove task
function removeTask(event) {
  if (event.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      event.target.parentElement.parentElement.remove();
    }
  }
}

// Clear tasks
function clearTasks() {
  if (confirm('Are you sure?')) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.lastChild);
    }
  }
}

// Filter tasks
function filterTasks(event) {
  const text = event.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
