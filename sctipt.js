console.log("I love you, will you marry me?")
const menu = document.getElementById("Menu");
const btn = document.getElementById("MenuBtn");
const icon = document.getElementById("Icon");

const showMenu = () => {
    menu.classList.toggle("show");
    icon.classList.toggle("bi-list");
    icon.classList.toggle("bi-egg");
}

btn.addEventListener("click", showMenu);