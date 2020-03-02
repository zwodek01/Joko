const hamburgerButton = document.querySelector(".hamburger");
const navigationList = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", function () {
    hamburgerButton.classList.toggle("is-active");
    navigationList.classList.toggle("navigation__active");
});