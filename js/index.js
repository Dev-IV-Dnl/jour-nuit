let jn = document.querySelector(".jour-nuit");
let body = document.body;
let cercle = document.querySelector(".cercleJN");


jn.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        cercle.style.transform = "translate(23px, 0px)";
    } else if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        cercle.style.transform = "translate(0, 0px)";
    }
});