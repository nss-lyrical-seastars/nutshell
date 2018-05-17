const welcomePage = require("./DOMManager/welcome");
const taskList = require("./DOMManager/taskView");
const createTask = require("./DOMManager/createTask");

welcomePage();

//View the task list
taskList();
createTask();