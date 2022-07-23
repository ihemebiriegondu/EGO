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

const header = document.querySelector("header");
header.addEventListener("click", function () {
    sideNavDiv.classList.add("d-none");
    sideNavDiv.classList.remove("d-flex");
});

//scrolling projects

function slide(direction) {
    var scroll = document.querySelector(".scroll");
    scrollCompleted = 0;
    var slideVar = setInterval(function () {
        if (direction == 'left') {
            scroll.scrollLeft -= 100;
        } else {
            scroll.scrollLeft += 100;
        }
        scrollCompleted += 10;
        if (scrollCompleted >= 100) {
            window.clearInterval(slideVar);
        }
    }, 30);
}

var formdata = new FormData();
formdata.append("Name", "Welcome to ActionForms.io");
formdata.append("Email", "Welcome to ActionForms.io");
formdata.append("Phone Number", "Welcome to ActionForms.io");
formdata.append("Your Message", "Welcome to ActionForms.io");

var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
};

fetch("https://www.actionforms.io/e/r/ihemebiri-egondu-test", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

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

//toggle nav icon
const toggleNav = document.querySelector(".toggle-btn");
let toggleNavFunction = () => {
    if (toggleNav.classList.contains("navbar-toggler-icon")) {
        toggleNav.classList.remove("navbar-toggler-icon")
        toggleNav.classList.add("bi-x-lg");
        toggleNav.classList.add("h3");
    } else {
        toggleNav.classList.add("navbar-toggler-icon")
        toggleNav.classList.remove("bi-x-lg");
        toggleNav.classList.remove("h3");
    }
};
toggleNav.addEventListener("click", toggleNavFunction);


//toggle mode
const modeTogglers = document.querySelectorAll(".mode-toggler");
const body = document.querySelector("body");
const allSections = document.querySelectorAll("section");
const projectBoxes = document.querySelectorAll(".project-box");
const biQuotes = document.querySelectorAll(".bi-quote");
const sideNavDivAs = document.querySelectorAll(".side-nav-div a");
const footer = document.querySelector("footer");
const firstCards = document.querySelectorAll(".first-card");

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

        firstCards.forEach(firstCard => {
            firstCard.classList.toggle("modeFirstCard");
            firstCard.classList.toggle("text-white");
        });

        footer.classList.toggle("bg-dark");
        footer.classList.toggle("text-white");

        document.querySelector(".header-div").classList.toggle("modeHeader-div");
        document.querySelector(".bi-chevron-double-down").classList.toggle("text-white");
        document.querySelector(".skills").classList.toggle("modeSkills");
        if (modeToggler.classList.contains("bi-moon")) {
            document.getElementById("first-img").setAttribute("src", "./images/responsive-icon-24441.png");
            document.getElementById("second-img").setAttribute("src", "./images/icons8-layout-64.png");
            document.getElementById("third-img").setAttribute("src", "./images/icons8-website-64.png");
        } else {
            document.getElementById("first-img").setAttribute("src", "./images/icons8-responsive-64.png");
            document.getElementById("second-img").setAttribute("src", "./images/icons8-layout-64 (1).png");
            document.getElementById("third-img").setAttribute("src", "./images/icons8-website-64 (1).png");
        }

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