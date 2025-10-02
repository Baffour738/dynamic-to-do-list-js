// Run after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select required DOM elements (exact variable names)
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // If taskText is empty, alert the user
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new li element and set its text content using a separate text node
    const li = document.createElement('li');
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    // Create a new button element for removing the task
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Assign an onclick event to the remove button that removes the li from taskList
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the li element, then append the li to taskList
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = "";
  }

  // Attach event listener to addButton that calls addTask when clicked
  addButton.addEventListener('click', addTask);

  // Add event listener to taskInput for 'keypress' to allow Enter key to add task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
