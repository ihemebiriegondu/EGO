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