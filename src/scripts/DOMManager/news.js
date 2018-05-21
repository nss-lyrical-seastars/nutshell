const $ = require("jquery");

const newsManager = require("../APIManager/newsManager");

const newsDiv = document.getElementById("news");

const newsHeading = document.createElement("h3");
newsHeading.textContent = "News";
newsDiv.appendChild(newsHeading);

const buttonNewArticle = document.createElement("button");
buttonNewArticle.type = "button";
buttonNewArticle.textContent = "New Article"
newsDiv.appendChild(buttonNewArticle);

let inputId = 1;

function inputMaker(placeholderText) {
    const fragment = document.createDocumentFragment();
    const paragraph = document.createElement("p");
    const input = document.createElement("input")
    input.id = `newsInput${inputId++}`;
    input.type = "text";
    input.placeholder = placeholderText;
    paragraph.appendChild(input);
    fragment.appendChild(paragraph);
    newsDiv.appendChild(fragment);
}

function displayNewsInput () {
    inputMaker("News Title");
    inputMaker("Synopsis");
    inputMaker("URL");

    const buttonSaveArticle = document.createElement("button");
        buttonSaveArticle.type = "button";
        buttonSaveArticle.textContent = "Save"
        newsDiv.appendChild(buttonSaveArticle);
}

buttonNewArticle.addEventListener("click", displayNewsInput);

// News Div to display saved articles

const divSavedArticles = document.createElement("div");
newsDiv.appendChild(divSavedArticles);

newsManager.getAllNews().then(allNews => {

    //loop thru all tasks in database, and for each news...
    allNews.forEach(news => {
        console.log(news)
        console.log(news.synopsis)

        const divEachArticle = document.createElement("div");
        divSavedArticles.appendChild(divEachArticle);

        const headingtitleNews = document.createElement("h5")
        $(headingtitleNews).append(news.title);
        divEachArticle.appendChild(headingtitleNews);

        const parSynopsis =  document.createElement("p");
        $(parSynopsis).append(news.synopsis);
        divEachArticle.appendChild(parSynopsis);

        const parUrl =  document.createElement("a");
        parUrl.href = news.url;
        $(parUrl).append(news.url);
        divEachArticle.appendChild(parUrl);

        const buttDeleteNews = document.createElement("button");
        buttDeleteNews.type = "button";
        buttDeleteNews.textContent = "Delete Article";
        divEachArticle.appendChild(buttDeleteNews);
    });
})


// $.ajax({
//     url: "http://localhost:8088/News",
//    method: "POST",
//    data:  {
//     "userId": 3,
//     "url": ,
//     "title": ,
//     "synopsis": ,
//     "timeStamp":
//   },
// })
// .then(
//    function (newNews) {
//    console.log(newNews);
//    }
// )

