//side nav display
//display button after first page
const sideNavContainer = document.querySelector(".side-nav-container");
const sideNavDiv = document.querySelector(".side-nav-div");
const sideNavMenu = document.querySelector(".side-nav-menu");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        sideNavMenu.style.display = "block";
    } else {
        sideNavMenu.style.display = "none";
    }
}

//display nav on click
let showSideNav = () => {
    if (sideNavDiv.classList.contains("d-none")) {
        sideNavDiv.classList.remove("d-none");
        sideNavDiv.classList.add("side-nav-div-animateIn");
        sideNavDiv.classList.add("d-flex");
    } else {
        sideNavDiv.classList.add("d-none");
        sideNavDiv.classList.remove("d-flex");
    }
};

sideNavMenu.addEventListener("click", showSideNav);

const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.addEventListener("click", function () {
        sideNavDiv.classList.add("d-none");
        sideNavDiv.classList.remove("d-flex");
    });
});

//drop shadow on navbar when scrolling
let showBoxShadow = () => {
    const nav = document.querySelector("nav")
    var top = nav.offsetTop;

    if (window.pageYOffset > top) {
        nav.classList.add("shadow-sm");
    } else {
        nav.classList.remove("shadow-sm");
    }
};
window.addEventListener("scroll", showBoxShadow);

// auto typing name 
let autoTypedText = new Typed(".auto-typed-text", {
    strings: ["Egondu", "a Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

let secondAutoTypedText = new Typed(".second-auto-typed-text", {
    strings: ["Egondu", "a Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});