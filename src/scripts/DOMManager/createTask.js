// Purpose create task view.
// Authors: Dejan Stjepanovic, Erin Agobert
const taskManager = require("../APIManager/tasksManager")
const dashboard = require("../DOMManager/dashboard")
const session = require("../APIManager/activeUser")



const createTask = function(){
// fragment puts info to the DOM
const fragment = document.createDocumentFragment();

// TITLE ON PAGE
// create element
const titleName = document.createElement("h1");
// text content on h1
titleName.textContent = "Create Task";
// append to fragment
fragment.appendChild(titleName)


// CREATE TASK INPUT
// createTaskName input
const createTaskName = document.createElement("input");
createTaskName.type = "text"
// createTaskName placeholder
createTaskName.placeholder = " Name of Task"
// append to div
fragment.appendChild(createTaskName)


// COMPLETION DATE INPUT
// completeDate input
const createTaskDate = document.createElement("input");
createTaskDate.setAttribute("type", "date");
fragment.appendChild(createTaskDate)


// SUBMIT BUTTON
const submit = document.createElement("button");
submit.type = "button"
// Button Text
submit.textContent = "Submit Task"
submit.onclick = function (event) {
    console.log(event)

    const activeUser = session.getActiveUser()

    const tasks = {

        userId: activeUser.id,
        task: createTaskName.value,
        estCompleteDate: createTaskDate.value,
        complete: false
   }
   JSON.parse(tasks)
    taskManager.createTasks(tasks)

    //const taskList = require("../DOMManager/taskView")
    //Return to main page on submit
    $("#createTasks").empty()
        dashboard()
}
fragment.appendChild(submit)


// Appending the fragment to divTasks. Then appending divTasks to the div called tasks in the index.html
const divTasks = document.getElementById("createTasks");
divTasks.appendChild(fragment)
}

module.exports = createTask