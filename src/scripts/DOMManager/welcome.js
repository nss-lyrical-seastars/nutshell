const fragment = document.createDocumentFragment();
const usersManager = require("../APIManager/userManager");
const $ = require("jquery");

$(document).ready(function() {
    $("#mainPage").hide();
});

const welcomePage = function() {
// create element
const welcomeLogo = document.createElement("h1");
// logo H1
welcomeLogo.textContent = "Lyrical Seastars Welcome";
// append to fragment
fragment.appendChild(welcomeLogo)

// e-mail input
const userEmail = document.createElement("input");
userEmail.type = "text"
// e-mail placeholder
userEmail.placeholder = "E-mail"
// append to  div
fragment.appendChild(userEmail)

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
    usersManager.getAllUsers().then(allUsers => {
        allUsers.forEach(user => {
            if (user.username === userNameInput.value && user.email === userEmail.value)
            console.log(user.username);
            console.log(user.email);
        })
    });
    $("#welcomePage").hide();
    $("#mainPage").show();
};

// append to div
fragment.appendChild(logIn)

// register Button
const register = document.createElement("button");
register.type = "button"
// Button Text
register.textContent = "Register Here"
register.onclick = function () {
    $("#welcomePage").hide();
    $("#mainPage").show();
};

// append to div
fragment.appendChild(register)
// append to div

const welcomeDiv = document.getElementById("welcomePage");
welcomeDiv.appendChild(fragment)
};

module.exports = welcomePage

