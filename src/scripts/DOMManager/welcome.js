const fragment = document.createDocumentFragment();
const $ = require("jquery");
const userManager = require("../APIManager/userManager")
const storage = require("../APIManager/activeUser")


const welcomePage = function() {

    $(document).ready(function() {
        $("#mainPage").hide();
    });

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
const userName = document.createElement("input");
userName.type = "text"
// username placeholder
userName.placeholder = "User Name"
// append to  div
fragment.appendChild(userName)

// submit Button
const logIn = document.createElement("button");
logIn.type = "button"
// Button Text
logIn.textContent = "Log In"

logIn.onclick = function () {
    const existingUser = userManager.getAllUsers().then(allUsers => {
        allUsers.forEach(user => {
            if(user.username === userName.value && user.email === userEmail.value) {
                storage.saveActiveUser(user)
                console.log(user)
            }
        });
    })
    if(existingUser){
        $("#welcomePage").hide();
        $("#mainPage").show();
    }
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