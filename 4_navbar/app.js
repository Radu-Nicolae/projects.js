const navToggle = document.querySelector(".links");
const buttonToggle = document.querySelector(".nav-toggle");

buttonToggle.addEventListener('click', function(){
    navToggle.classList.toggle("show-links");
})