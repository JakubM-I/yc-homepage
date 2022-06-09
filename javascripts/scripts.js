console.log("Witaj internauto!");

let page = document.querySelector("body");
let header = document.querySelector(".header");
let text = document.querySelector(".main");
let web = document.querySelector(".text1");
let code = document.querySelector(".text2");
let footer = document.querySelector(".footer");
let nightModeSwitch = document.querySelector(".js-nightModeSwitch");
let nightModeButton =  document.querySelector(".js-nightModeButton");
let menu = document.querySelector(".navigation");
let menuLink = document.querySelectorAll(".navigation__link");
let rowHead = document.querySelectorAll(".onlineBuyer__rowHead");
let colHead = document.querySelectorAll(".onlineBuyer__colHead");
let colSummary = document.querySelector(".onlineBuyer__colSummary");
let screenWidth = screen.width;
let navButton = document.querySelector(".js-navButton");
let navHamburger = document.querySelector(".js-navHamburger");
let mobileMenu = document.querySelector(".js-mobileMenu");


window.addEventListener("resize", () => {
    if(window.innerWidth < 650){
        navButton.classList.remove("navigation__item--button");
        navButton.classList.add("navigation__item--mobile");
    } else {
        navButton.classList.add("navigation__item--button");
        navButton.classList.remove("navigation__item--mobile");
    }
})

nightModeSwitch.addEventListener("click", () => {
    page.classList.toggle("blackStyle");
    header.classList.toggle("blackStyle");
    text.classList.toggle("blackStyle");
    footer.classList.toggle("blackStyle");
    web.classList.toggle("blackStyle");
    code.classList.toggle("blackStyle");

    menuLink.forEach((l) => {
        l.classList.toggle("navigation__link--black");
    })
    rowHead.forEach((r) => {
        r.classList.toggle("onlineBuyer__rowHead--black");
    })
    colHead.forEach((c) => {
        c.classList.toggle("onlineBuyer__colHead--black");
    })
    colSummary.classList.toggle("onlineBuyer__colSummary--black");
    
    nightModeButton.innerText = page.classList.contains("blackStyle") ? "Jasny motyw" : "Ciemny motyw";
})


navHamburger.addEventListener("click", () =>{
    mobileMenu.classList.toggle("mobileMenu--off");
})