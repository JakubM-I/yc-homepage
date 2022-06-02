console.log("Witaj internauto!");

let page = document.querySelector("body");
let header = document.querySelector(".header");
let text = document.querySelector(".main");
let web = document.querySelector(".text1");
let code = document.querySelector(".text2");
let footer = document.querySelector(".footer");
let change = document.querySelector(".button");

change.addEventListener("click", () =>{
    page.classList.toggle("blackStyle");
    header.classList.toggle("blackStyle");
    text.classList.toggle("blackStyle");
    footer.classList.toggle("blackStyle");
    web.classList.toggle("blackStyle");
    code.classList.toggle("blackStyle");
// if (page.classList.contains("blackStyle")){
//     change.innerText = "Jasny";
//         } else {
//         change.innerText = "Ciemny";
//     }
    change.innerText = page.classList.contains("blackStyle") ? "Jasny" : "Ciemny";
})

typeof text