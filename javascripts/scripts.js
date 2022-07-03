console.log("Witaj internauto na mojej stronie! Jestem początkujacym frontend developerem z kilkunastoletnim doświadczeniem w ecommerce");

let body = document.querySelector("body");
let paragraphInternet = document.querySelector(".js-paragraphIconInternet");
let paragraphCoding = document.querySelector(".js-paragraphIconCoding");
let nightModeSwitch = document.querySelector(".js-themeModeSwitch");
let nightModeButton =  document.querySelector(".js-themeModeButton");
let navigationLink = document.querySelectorAll(".navigation__link");
let tableCell = document.querySelectorAll(".js-tableCell");
let cellHead = document.querySelectorAll(".onlineBuyer__tableCell--head");
let colSummary = document.querySelector(".onlineBuyer__colSummary");
let navButton = document.querySelector(".js-navButton");
let navHamburger = document.querySelector(".js-navHamburger");
let mobileMenu = document.querySelector(".js-mobileMenu");
let navLogoWhite = document.querySelector(".js-navLogoWhite");
let navLogoBlack = document.querySelector(".js-navLogoBlack");
let mobileMenuItem = document.querySelectorAll(".js-mobileMenuItem");
let mobileMenuList = document.querySelector(".js-mobileMenuList");
let themeSwitchIconNight = document.querySelector(".js-themeSwitchIconNight");
let themeSwitchIconDay = document.querySelector(".js-themeSwitchIconDay");
let topHamburgerItem = document.querySelector(".js-topHamburgerItem");
let middleHamburgerItem = document.querySelector(".js-middleHamburgerItem");
let bottomHamburgerItem = document.querySelector(".js-bottomHamburgerItem");


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
    body.classList.toggle("body--nightTheme");
    paragraphInternet.classList.toggle("paragraph__text--iconInternetBlack");
    paragraphCoding.classList.toggle("paragraph__text--iconCodingBlack");
    navLogoWhite.classList.toggle("navigation__logo--off");
    navLogoBlack.classList.toggle("navigation__logo--off");
    mobileMenuList.classList.toggle("mobileMenu__list--black");
    themeSwitchIconNight.classList.toggle("navigation__themeModeIcon--off");
    themeSwitchIconDay.classList.toggle("navigation__themeModeIcon--off");

    navigationLink.forEach((l) => {
        l.classList.toggle("navigation__link--black");
    })

    mobileMenuItem.forEach((i) => {
        i.classList.toggle("mobileMenu__item--black");
    })

    tableCell.forEach((c) =>{
        c.classList.toggle("onlineBuyer__tableCell--black");
    })

    cellHead.forEach((r) => {
        r.classList.toggle("onlineBuyer__tableCell--headBlack");
    })

    colSummary.classList.toggle("onlineBuyer__colSummary--black");
    
    nightModeButton.innerText = body.classList.contains("body--nightTheme") ? "Jasny motyw" : "Ciemny motyw";
})

navHamburger.addEventListener("click", () =>{
    mobileMenu.classList.toggle("mobileMenu--off");
    topHamburgerItem.classList.toggle("navigation__hamburgerItem--topEffect");
    middleHamburgerItem.classList.toggle("navigation__hamburgerItem--middleEffect");
    bottomHamburgerItem.classList.toggle("navigation__hamburgerItem--bottomEffect");
})

mobileMenuItem.forEach((m) =>{
    m.addEventListener("click", () =>{
        mobileMenu.classList.toggle("mobileMenu--off");
        topHamburgerItem.classList.toggle("navigation__hamburgerItem--topEffect");
        middleHamburgerItem.classList.toggle("navigation__hamburgerItem--middleEffect");
        bottomHamburgerItem.classList.toggle("navigation__hamburgerItem--bottomEffect");
    })
})