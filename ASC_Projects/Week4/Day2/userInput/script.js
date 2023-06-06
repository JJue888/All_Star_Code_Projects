let userInput = document.querySelector("#input");

console.dir(userInput);

let submitButton = document.querySelector("#submit-button");
let todolist = document.querySelector("#todo-list");

submitButton.onclick = function(evnet) {
    event.preventDefault();
    
    let newTask = document.createElement("li");
    newTask.innerHTML = userInput.value;

    todolist.appendChild(newTask)

    userInput.value = "";

}