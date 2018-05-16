const $ = require("jquery")

const messageManager = Object.create(null, {
    getAllMessages: {
        value: function () {
            return $.ajax("http://localhost:8088/messages")
        }
    },
    getSingleMessage: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/messages/${id}`)
        }
    },
    createMessage: {
        value: function (message) {
            return $.ajax({
                url: "http://localhost:8088/messages",
                method: "POST",
                data: message
            })
        }
    },
    deleteMessage: {
        value: function (id) {
            return $.ajax({
                url: `http://localhost:8088/messages/${id}`,
                method: "DELETE"
            })
        }
    },
    updateMessage: {
        value: function (message) {
            return $.ajax({
                url: `http://localhost:8088/messages/${message.id}`,
                method: "PUT",
                data: message
            })
        }
    }
})

module.exports = messageManager