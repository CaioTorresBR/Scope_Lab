// Defining variables to acces data

const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTasksBtn = document.getElementById("clearAllTasksBtn")

let tasks = [];

//  Defining functions to access data


function addTask() {
    // retrieve the value entered into the taskInput HTML
    // element by the user
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        // adds this new task object using push array method into tasks array
        tasks.push({ text: taskText});
        // resets taskInput to an empty string after adding the task
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";

    // iterates through the tasks array using for each
    // creating a list item <li> for each task
    
    tasks.forEach((task, index) => {
        
        // constructs HTML content for each task (checkbox, labl and corresponding ids)
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        
        // sets up an event listener for each checkbox within the task list <li element
        li.querySelector("input").addEventListener("change", () => toggleTask(index));

        // appends newly created list item containing task details in the 
        // todo list interface using appendChild
        taskList.appendChild(li);
    });
}

// function thay toggles the completition status of a specific task in the task arrays
function toggleTask(index) {
    // selects checkbox regardless
    // if selected, it will mark task as completed
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    // filter filters task array, which has the list of tasks entered by users
    // retrieve only the tasks that are not marked as completed
    tasks = tasks.filter(task => !task.completed);
    
    displayTasks();
}

// corrigir!
function clearAllTasks() {
    tasks = [];
    taskList.innerHTML = ""
    //displayTasks();
}

// Perform addEventListener for addTask and clearCompletedTasks buttons
// to listen for clicks after clicking the Add Task and Clear Completed buttons.
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllTasksBtn.addEventListener("click", clearAllTasks);

displayTasks();


