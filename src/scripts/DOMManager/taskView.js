//Purpose:  Display user's tasks to the DOM
//Author:  Erin Agobert
const $ = require("jquery")
const taskManager = require("../APIManager/tasksManager")

const session = require("../APIManager/activeUser")

const taskList = function () {


        //Get the element with the id "tasks"
        const parentEl = document.getElementById("tasks")

        //Create a button for submitting a newtask
        const newTaskBtn = document.createElement("button")

        newTaskBtn.textContent = "New Task"
        parentEl.appendChild(newTaskBtn)

        //On button click the create task form opens
        $(newTaskBtn).on("click", function (event) {
            console.log(event.currentTarget)
            const createTask = require("../DOMManager/createTask")
            $(parentEl).empty()
            createTask()
        })

        //Create an unordered list element
        const ul = document.createElement("ul")

        //Append the ul element to the parent element with the id "tasks"
        parentEl.appendChild(ul)

        //Get all tasks in the database then....
        taskManager.getAllTasks().then(allTasks => {

            //Clear any active users in session storage
            //session.clearActiveUser("ActiveUser");
        //Get active User
        data = session.getActiveUser("ActiveUser")
        console.log(data)

            //loop thru all tasks in database, and for each task...
            allTasks.forEach(task => {


                if (parseInt(data.id) === parseInt(task.userId)) {

        //create a list element and...
        const li = document.createElement("li")
                    const input = document.createElement("input")
                    input.type = "checkbox"

                    li.appendChild(input)

                    const a = document.createElement("a")
                    a.href = "#"
                    a.id = `${task.id}`
                    a.textContent = " " + task.task

                    li.appendChild(a)
                    li.append(" " + task.estCompleteDate)

                    const taskDate = task.estCompleteDate
                    ul.appendChild(li)
                }


            });

            // //Create event handler to edit task
            // $("a").on("click", function (event) {
            //     console.log(event.currentTarget.id)
            //     taskManager.getSingleTasks(event.currentTarget.id)
            //     $(parentEl).empty()
            //     createTask(event.currentTarget.id)
            // })
            // //Create event handler to change input from "unchecked to "checked"

        })

        if (parentEl.hasChildNodes() === false) {
                    //create a list element and...
        const li = document.createElement("li")
            //create a list element and...
            li.textContent = "You have no tasks"
            ul.appendChild(li)
        }


}

module.exports = taskList