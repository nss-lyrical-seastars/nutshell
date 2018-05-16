const $ = require("jquery")

const usersManager = Object.create(null, {

    // get all users
    getAllUsers: {
        value: function () {
            return $.ajax("http://localhost:8088/Users")
        }
    },
    // get single user
    getSingleUsers: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/Users/${id}`)
        }
    },
    // post (create) user
    createUsers: {
        value: function (Users) {
            return $.ajax({
                url: "http://localhost:8088/Users",
                method: "POST",
                data: Users
            })
        }
    },
    // delete user
    deleteUsers: {
        value: function (id) {
            return $.ajax({
                url: `http://localhost:8088/Users/${id}`,
                method: "DELETE"
            })
        }
    },
    //  put (update) user
    updateUsers: {
        value: function (Users) {
            return $.ajax({
                url: `http://localhost:8088/Users/${Users.id}`,
                method: "PUT",
                data:Users
            })
        }
    }
})

module.exports = usersManager