let jn = document.querySelector(".jour-nuit");
let body = document.body;
jn.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
    } else if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
    }
})