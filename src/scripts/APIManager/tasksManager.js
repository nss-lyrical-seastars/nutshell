const $ = require("jquery")

const tasksManager = Object.create(null, {

    // get all tasks
    getAllTasks: {
        value: function () {
            return $.ajax("http://localhost:8088/tasks")
        }
    },
    // get single task
    getSingleTasks: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/tasks/${id}`)
        }
    },
    // post (create) task
    createTasks: {
        value: function (tasks) {
            return $.ajax({
                url: "http://localhost:8088/tasks",
                method: "POST",
                data: tasks
            })
        }
    },
    // delete task
    deleteTasks: {
        value: function (id) {
            return $.ajax({
                url: `http://localhost:8088/tasks/${id}`,
                method: "DELETE"
            })
        }
    },
    //  put (update) user
    updateTasks: {
        value: function (tasks) {
            return $.ajax({
                url: `http://localhost:8088/tasks/${tasks.id}`,
                method: "PUT",
                data:tasks
            })
        }
    }
})

module.exports = tasksManager