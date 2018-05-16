const $ = require("jquery")

const friendManager = Object.create(null, {

    getAllFriends: {
        value: function () {
            return $.ajax("http://localhost:8088/friends")
        }
    },
    getSingleFriend: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/friends/${id}`)
        }
    },
    addFriend: {
        value: function (friend) {
            return $.ajax({
                url: "http://localhost:8088/friends",
                method: "POST",
                data: friend
            })
        }
    },
    deleteFriend: {
        value: function (id) {
            return $.ajax({
                url: `http://localhost:8088/friends/${id}`,
                method: "DELETE"
            })
        }
    },
    updateFriend: {
        value: function (friend) {
            return $.ajax({
                url: `http://localhost:8088/friends/${friend.id}`,
                method: "PUT",
                data: friend
            })
        }
    }
})

module.exports = friendManager