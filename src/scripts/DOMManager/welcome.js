const fragment = document.createDocumentFragment();
const usersManager = require("../APIManager/userManager");
const $ = require("jquery");
const userManager = require("../APIManager/userManager")
const session = require("../APIManager/activeUser")
const dashboard = require("../DOMManager/dashboard")

$(document).ready(function () {
    $("#mainPage").hide();
});

const welcomePage = function () {
    // create element
    const welcomeLogo = document.createElement("h1");
    // logo H1
    welcomeLogo.textContent = "Lyrical Seastars Welcome";
    // append to fragment
    fragment.appendChild(welcomeLogo)

    // e-mail input
    const userEmailInput = document.createElement("input");
    userEmailInput.id = "userEmailID"
    userEmailInput.type = "text"
    userEmailInput.type = "email";
    // e-mail must have @
    userEmailInput.pattern = "/\S+@\S+/";
    // e-mail placeholder
    userEmailInput.placeholder = "E-mail"

    // append to  div
    fragment.appendChild(userEmailInput)

    // username input
    const userNameInput = document.createElement("input");
    userNameInput.id = "userNameID"
    userNameInput.type = "text"
    // username placeholder
    userNameInput.placeholder = "User Name"
    // append to  div
    fragment.appendChild(userNameInput)

    // submit Button
    const logIn = document.createElement("button");
    logIn.type = "button"
    // Button Text
    logIn.textContent = "Log In"
    // Login Onclick
    logIn.onclick = function () {
        // Get all users from API
        usersManager.getAllUsers().then(allUsers => {
            // Setting flag variable to false
            let userAuthenticated = false;
            // Loop over all users to see if input matches an existing user
            allUsers.forEach(user => {
                if (user.username === userNameInput.value && user.email === userEmailInput.value) {

                    // Matching user so set flag variable to true
                    userAuthenticated = true;
                    $("#welcomePage").hide();
                    $("#mainPage").show();
                    dashboard()
                    session.saveActiveUser(user);
                    // E-mail Validate
                } else if (user.username === userNameInput.value && user.email !== userEmailInput.value) {
                    swal("", "Not a valid e-mail. Please try again.", "error");
                    // Username Validate
                } else if (user.username !== userNameInput.value && user.email === userEmailInput.value){
                    swal("", "Not a valid user. Please try again.", "error");
                }
            })
            // Flag variable is still false if there was no match
            // if (!userAuthenticated) {
            //     // Warn user with sweet alert
            //     swal("", "Email or Username did not match. Please try again.", "error");
            // }
        })
    };

    // append to div
    fragment.appendChild(logIn)

    // register Button
    const register = document.createElement("button");
    register.type = "button"
    // Button Text
    register.textContent = "Register Here"
    register.onclick = function () {
        usersManager.getAllUsers().then(allUsers => {
            // Setting flag variable to false
            let validUserInput = true;
            // Loop over all users to see if input matches an existing user
            allUsers.forEach(user => {
                if (user.username === userNameInput.value || user.email === userEmailInput.value) {
                    validUserInput = false;
                    swal("", "Email or Username already exists. Please try again.", "error");
                }
            })
            if (validUserInput) {
                let request = usersManager.createUsers({
                    "username": userNameInput.value,
                    "email": userEmailInput.value
                });
                request.done(function (msg) {
                    swal("", "Sweet! You're registered, come on in.", "success");
                    $("#welcomePage").hide();
                    $("#mainPage").show();
                    dashboard()
                    session.saveActiveUser();
                });

                request.fail(function (jqXHR, textStatus) {
                    swal("", "Oh no! Something went wrong!", "error");
                });
            }
        })
    };

    // append to div
    fragment.appendChild(register)
    // append to div

    const welcomeDiv = document.getElementById("welcomePage");
    welcomeDiv.appendChild(fragment)
};

module.exports = welcomePage