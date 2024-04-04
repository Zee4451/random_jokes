const p = document.querySelector("#joke");
const btn = document.querySelector("button")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () => {
    p.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        p.textContent = `${item.joke}`
        p.classList.add("fade");
    })
}
btn.addEventListener("click", getJoke)
getJoke();