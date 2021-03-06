const $ = require("jquery")

const newsManager = Object.create(null, {

    // get all news
    getAllNews: {
        value: function () {
            return $.ajax("http://localhost:8088/News")
        }
    },
    // get single news
    getSingleNews: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/News/${id}`)
        }
    },
    // post (create) news
    createNews: {
        value: function (News) {
            return $.ajax({
                url: "http://localhost:8088/News",
                method: "POST",
                data: News

            })
        }
    },
    // delete news
    deleteNews: {
        value: function (id) {
            return $.ajax({
                url: `http://localhost:8088/News/${id}`,
                method: "DELETE"
            })
        }
    },
    //  put (update) news
    updateNews: {
        value: function (News) {
            return $.ajax({
                url: `http://localhost:8088/News/${News.id}`,
                method: "PUT",
                data:News
            })
        }
    }
})

module.exports = newsManager