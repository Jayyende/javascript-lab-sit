let tasks = [];

// Add Task
function addTask(){

let input = document.getElementById("taskInput");

let task = input.value.trim();

if(task===""){

alert("Please enter a task.");

return;

}

tasks.push(task);

input.value="";

displayTasks();

console.log("Task Added");

console.table(tasks);

}

// Display Tasks

function displayTasks(){

let taskList=document.getElementById("taskList");

taskList.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

// Task Text

let span=document.createElement("span");

span.className="task";

span.textContent=task;

// Buttons

let buttons=document.createElement("div");

buttons.className="action-buttons";

// Edit Button

let editBtn=document.createElement("button");

editBtn.textContent="Edit";

editBtn.onclick=function(){

editTask(index);

};

// Delete Button

let deleteBtn=document.createElement("button");

deleteBtn.textContent="Delete";

deleteBtn.onclick=function(){

deleteTask(index);

};

buttons.appendChild(editBtn);

buttons.appendChild(deleteBtn);

li.appendChild(span);

li.appendChild(buttons);

taskList.appendChild(li);

});

}

// Edit Task

function editTask(index){

let newTask=prompt(

"Edit Task",

tasks[index]

);

if(newTask!==null && newTask.trim()!==""){

tasks[index]=newTask.trim();

displayTasks();

console.warn("Task Edited");

}

}

// Delete Task

function deleteTask(index){

if(confirm("Delete this task?")){

tasks.splice(index,1);

displayTasks();

console.warn("Task Deleted");

}

}
