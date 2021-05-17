const btnEl = document.getElementById("btn");
const modalEl = document.getElementById("cover");
const closeEl = document.getElementById("close");


btnEl.addEventListener("click", () => {
    modalEl.style.display = "flex";
});

closeEl.addEventListener("click", () => {
    modalEl.style.display = "none";

})