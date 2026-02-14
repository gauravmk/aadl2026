document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.getElementsByClassName("faq-question");
    for (const question of faqQuestions) {
        question.addEventListener("click", () => {
            question.parentElement.classList.toggle("closed")
        })
    }

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu")
    hamburger.addEventListener("click", () =>{
        navMenu.classList.toggle("open");
    })
    const navMenuItems = document.querySelectorAll("#nav-menu a");
    for (const menuItem of navMenuItems) {
        menuItem.addEventListener("click", () =>{
            navMenu.classList.remove("open");
        })
    }
});