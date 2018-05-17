//Purpose:  Display user's tasks to the DOM
//Author:  Erin Agobert
const $ = require("jquery")
const taskManager = require("../APIManager/tasksManager")

const taskList = function(){

    //Get the element with the id "tasks"
    const parentEl = document.getElementById("tasks")

    //Create an unordered list element
    const ul = document.createElement("ul")

    //Append the ul element to the parent element with the id "tasks"
    parentEl.appendChild(ul)

    //Get all tasks in the database then....
    taskManager.getAllTasks().then(allTasks => {

        //loop thru all tasks in database, and for each task...
        allTasks.forEach(task => {

            //create a list element and...
            const li = document.createElement("li")

            //append task checkbox and task
            $(li).append("<input type='checkbox'>"+ " " + task.task)
            ul.appendChild(li)
        });

    })

}

module.exports = taskList