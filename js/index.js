//side nav display
//display button after first page
const sideNavContainer = document.querySelector(".side-nav-container");
const sideNavDiv = document.querySelector(".side-nav-div");
const sideNavMenu = document.querySelector(".side-nav-menu");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        sideNavMenu.style.display = "block";
        sideNavDiv.classList.add("d-none");
        sideNavDiv.classList.remove("d-flex");
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
/*let showBoxShadow = () => {
    const nav = document.querySelector("nav")
    var top = nav.offsetTop;

    if (window.pageYOffset > top) {
        nav.classList.add("shadow-lg");
    } else {
        nav.classList.remove("shadow-lg");
    }
};
window.addEventListener("scroll", showBoxShadow);*/

//toggle mode
const modeTogglers = document.querySelectorAll(".mode-toggler");
const body = document.querySelector("body");
const allSections = document.querySelectorAll("section");
const projectBoxes = document.querySelectorAll(".project-box");
const biQuotes = document.querySelectorAll(".bi-quote");
const sideNavDivAs = document.querySelectorAll(".side-nav-div a");
const footer = document.querySelector("footer");

modeTogglers.forEach(modeToggler => {
    let toogleModeFunction = () => {
        if (modeToggler.classList.contains("bi-moon")) {
            modeToggler.classList.remove("bi-moon");
            modeToggler.classList.add("bi-brightness-low");
            modeToggler.classList.add("fs-4");
        } else {
            modeToggler.classList.remove("fs-4");
            modeToggler.classList.add("bi-moon");
            modeToggler.classList.remove("bi-brightness-low");
        }

        body.classList.toggle("modeBody");
        allSections.forEach(section => {
            section.classList.toggle("modeSection");
        });
        projectBoxes.forEach(projectBox => {
            projectBox.classList.toggle("modeProjectBox");
        });

        biQuotes.forEach(biQuote => {
            biQuote.classList.toggle("mode-bi-quote");
        });

        sideNavDivAs.forEach(sideNavDivA => {
            sideNavDivA.classList.toggle("text-white");
        });

        footer.classList.toggle("bg-dark");
        footer.classList.toggle("text-white");

        document.querySelector(".about-me-img-first").classList.toggle("modeAbout");
        document.querySelector(".header-div").classList.toggle("modeHeader-div");
        document.querySelector(".bi-chevron-double-down").classList.toggle("text-white");
        document.querySelector(".skills").classList.toggle("modeSkills");
    };
    modeToggler.addEventListener("click", toogleModeFunction);
});

//form message
/*
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

let validateMessage = () => {
    inputs.forEach(input => {
        if (input.value === "") {
            input.classList.add("is-invalid")
            return
        } 
        input.value = "";
    });
    document.querySelector("textarea").value = "";
};
form.addEventListener("submit", validateMessage);
*/
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