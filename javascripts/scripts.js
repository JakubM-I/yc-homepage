console.log("Witaj internauto!");

let page = document.querySelector("body");
let header = document.querySelector(".header");
let text = document.querySelector(".main");
let web = document.querySelector(".text1");
let code = document.querySelector(".text2");
let footer = document.querySelector(".footer");
let change = document.querySelector(".button");
let menu = document.querySelector(".menu");
let menuLink = document.querySelectorAll(".menu__link");
let rowHead = document.querySelectorAll(".onlineBuyer__rowHead");
let colHead = document.querySelectorAll(".onlineBuyer__colHead");
let colSummary = document.querySelector(".onlineBuyer__colSummary");

change.addEventListener("click", () => {
    page.classList.toggle("blackStyle");
    header.classList.toggle("blackStyle");
    text.classList.toggle("blackStyle");
    footer.classList.toggle("blackStyle");
    web.classList.toggle("blackStyle");
    code.classList.toggle("blackStyle");
    menu.classList.toggle("blackStyle");
    menuLink.forEach((l) => {
        l.classList.toggle("blackStyle");
    })
    rowHead.forEach((r) => {
        r.classList.toggle("onlineBuyer__rowHead--black");
    })
    colHead.forEach((c) => {
        c.classList.toggle("onlineBuyer__colHead--black");
    })
    colSummary.classList.toggle("onlineBuyer__colSummary--black");
    // if (page.classList.contains("blackStyle")){
    //     change.innerText = "Jasny";
    //         } else {
    //         change.innerText = "Ciemny";
    //     }
    change.innerText = page.classList.contains("blackStyle") ? "Jasny" : "Ciemny";
})
