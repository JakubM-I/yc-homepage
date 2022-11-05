{
    const welcome = () => {
        console.log("Witaj internauto na mojej stronie! Jestem początkujacym frontend developerem z kilkunastoletnim doświadczeniem w ecommerce");
    };
    
    const darkThemeToggle = () => {
        const body = document.querySelector("body");
        
        body.classList.toggle("body--nightTheme");
    };
    
    const nightModeButtonTextChanging = () =>{
        const nightModeButton =  document.querySelector(".js-themeModeButton");
    
        nightModeButton.innerText = body.classList.contains("body--nightTheme") ? "Jasny motyw" : "Ciemny motyw";
    };
    
    const tableDarkModeToggle = () => {
        const tableCell = document.querySelectorAll(".js-tableCell");
        const cellHead = document.querySelectorAll(".onlineBuyer__tableCell--head");
        const colSummary = document.querySelector(".onlineBuyer__colSummary");
    
        tableCell.forEach((cell) =>{
            cell.classList.toggle("onlineBuyer__tableCell--black");
        })
    
        cellHead.forEach((head) => {
            head.classList.toggle("onlineBuyer__tableCell--headBlack");
        })
    
        colSummary.classList.toggle("onlineBuyer__colSummary--black");
    };
    
    const navigationDarkModeToggle = (mobileMenuItem) => {
        const navigationLink = document.querySelectorAll(".js-navigationLink");
        
        navigationLink.forEach((link) => {
            link.classList.toggle("navigation__link--black");
        })
    
        mobileMenuItem.forEach((item) => {
            item.classList.toggle("mobileMenu__item--black");
        })
    };
    
    const mobileMenuDarkModeToggle = () => {
        const mobileMenuList = document.querySelector(".js-mobileMenuList");
    
        mobileMenuList.classList.toggle("mobileMenu__list--black");
    };
    
    const darkIconToggle = () => {
        const paragraphInternet = document.querySelector(".js-paragraphIconInternet");
        const paragraphCoding = document.querySelector(".js-paragraphIconCoding");
        const navLogoWhite = document.querySelector(".js-navLogoWhite");
        const navLogoBlack = document.querySelector(".js-navLogoBlack");
    
        paragraphInternet.classList.toggle("paragraph__text--iconInternetBlack");
        paragraphCoding.classList.toggle("paragraph__text--iconCodingBlack");
        navLogoWhite.classList.toggle("navigation__logo--off");
        navLogoBlack.classList.toggle("navigation__logo--off");
    };
    
    const themeSwitchIconToggle = () => {
        const themeSwitchIconNight = document.querySelector(".js-themeSwitchIconNight");
        const themeSwitchIconDay = document.querySelector(".js-themeSwitchIconDay");
    
        themeSwitchIconNight.classList.toggle("navigation__themeModeIcon--off");
        themeSwitchIconDay.classList.toggle("navigation__themeModeIcon--off");
    };
    
    const nightModeToggle = (mobileMenuItem) => {
        const nightModeSwitch = document.querySelector(".js-themeModeSwitch");
        nightModeSwitch.addEventListener("click", () => {
            darkThemeToggle();
            mobileMenuDarkModeToggle();
            themeSwitchIconToggle();
            darkIconToggle();
            navigationDarkModeToggle(mobileMenuItem);
            tableDarkModeToggle();
            nightModeButtonTextChanging();
        });
    };
    
    const toggleMobileMenu = () => {
        const mobileMenu = document.querySelector(".js-mobileMenu");
    
        mobileMenu.classList.toggle("mobileMenu--off");
    };
    
    const mobileButtonAnimation = () => {
        const topHamburgerItem = document.querySelector(".js-topHamburgerItem");
        const middleHamburgerItem = document.querySelector(".js-middleHamburgerItem");
        const bottomHamburgerItem = document.querySelector(".js-bottomHamburgerItem");
    
        topHamburgerItem.classList.toggle("navigation__hamburgerItem--topEffect");
        middleHamburgerItem.classList.toggle("navigation__hamburgerItem--middleEffect");
        bottomHamburgerItem.classList.toggle("navigation__hamburgerItem--bottomEffect");
    };
    
    const mobileButtonOperation = () => {
        const navHamburger = document.querySelector(".js-navHamburger");
    
        navHamburger.addEventListener("click", () =>{
            toggleMobileMenu();
            mobileButtonAnimation();
        });
    };
    
    const mobileMenuOperation = (mobileMenuItem) => {
        mobileMenuItem.forEach((m) =>{
            m.addEventListener("click", () =>{
                toggleMobileMenu();
                mobileButtonAnimation();
            });
        });
    };
    
    const init = () => {
        const mobileMenuItem = document.querySelectorAll(".js-mobileMenuItem");

        mobileButtonOperation();
        mobileMenuOperation(mobileMenuItem);
        nightModeToggle(mobileMenuItem);
    
        welcome();
    };
    
    init();
}