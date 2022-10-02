const toggleBtn = document.querySelector(".toggle-btn");
const light = document.querySelector(".light");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links"); 


toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("active");
        light.classList.toggle("on");
})

navToggle.addEventListener('click', () => {
    links.classList.toggle("show-links");
})