const input = document.querySelector(".input");
const body = document.querySelector("body");
const title = document.querySelector(".title");
const headers = document.querySelectorAll('h1, h2');
const container = document.querySelector(".main-container");
const texts = document.querySelectorAll("p");

input.checked = JSON.parse(localStorage.getItem('mode'));
updateBody();

function updateBody() {
    if (input.checked) {
        body.style.transition = "background-color 0.5s, color 0.5s";
        body.style.background = "black";
        container.style.transition = "background-color 0.5s";
        container.style.background = "#1a1a1a";
        headers.forEach(function (header) {
            header.style.transition = "color 0.5s";
            header.style.color = "#585858";
            header.style.background ="#1e1e1e";
        });
        texts.forEach(function (text) {
            text.style.transition = "color 0.5s";
            text.style.color = "#adadad";
        });
        title.style.transition = "color 0.5s";
        title.style.color = "white";
        title.style.background = "none";

    }
    else {
        body.style.transition = "background-color 0.5s, color 0.5s";
        body.style.background = "white";
        container.style.transition = "background-color 0.5s";
        container.style.background = "#fbf9f9";
        headers.forEach(function (header) {
            header.style.transition = "color 0.5s";
            header.style.color = "black";
            header.style.background = "#e3dcdc";

        });
        texts.forEach(function (text) {
            text.style.transition = "color 0.5s";
            text.style.color = "#adadad";
        });
        title.style.transition = "color 0.5s";
        title.style.color = "black";
        title.style.background = "none";
    }
}

input.addEventListener("input", () => {
    updateBody();
    updateStorage();
})

function updateStorage() {
    localStorage.setItem("mode", JSON.stringify(input.checked));
}

