const btnSubmit = document.getElementById("btnSubmit");
const tasksContainer = document.getElementById("tasksContainer");
const btnClear = document.getElementById("btnClear");
const newTask = document.getElementById('taskHolder');


btnSubmit.addEventListener("click", addTask);
btnClear.addEventListener("click", clearList);
tasksContainer.addEventListener("click", crossTask);


function addTask(){
    newTask.focus();
    newTask.select();
    if (newTask.value.length === 0){
        alert("Please enter a valid input!");
    } else {
        tasksContainer.innerHTML += `<div class="task"> <p class="addedTask" id="task">${newTask.value}</div>`;
        newTask.value = "";
    }
}

function clearList(){
    tasksContainer.innerHTML = "";
}

function crossTask(event){
    const style = event.target.style;
    if(!style.textDecoration){
        style.textDecoration = "line-through";
    } else {
        style.textDecoration = "none";
    }
}
