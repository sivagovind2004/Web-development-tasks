// Get HTML elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");


// Listen for form submission
taskForm.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get the entered task
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task
    createTask(taskText);

    // Clear input box
    taskInput.value = "";

    // Update task count
    updateTaskCount();

});


// Function to create a task
function createTask(text) {

    // Create list item
    const li = document.createElement("li");

    // Add class
    li.classList.add("task");


    // Create task text
    const span = document.createElement("span");

    span.textContent = text;

    span.classList.add("task-text");


    // Click task to mark as completed
    span.addEventListener("click", function() {

        span.classList.toggle("completed");

    });


    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-btn");


    // Delete task
    deleteButton.addEventListener("click", function() {

        li.remove();

        updateTaskCount();

    });


    // Add elements to task
    li.appendChild(span);

    li.appendChild(deleteButton);


    // Add task to list
    taskList.appendChild(li);
}


// Update task counter
function updateTaskCount() {

    const totalTasks = taskList.children.length;

    if (totalTasks === 1) {

        taskCount.textContent = "1 task";

    } else {

        taskCount.textContent = totalTasks + " tasks";

    }

}