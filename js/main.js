

// Show  Nav Menu

const navicon = document.querySelector(".nav__icon");
const navCancel = document.querySelector(".nav__cancel");
const navMenuList = document.querySelector(".nav__menu");

navicon.addEventListener("click", () => {

    

    navMenuList.style.opacity = "1";
    navMenuList.style.transform = "translate(10px)";
    navCancel.style.display = "block";

})

// Hide Nav Menu

document.addEventListener("click", (e) => {

    if(e.target.matches('.menu--img') || e.target.parentElement.matches(".nav__menu") || e.target.parentElement.matches(".nav__form") || e.target.parentElement.matches(".menulist__item")|| e.target.parentElement.matches(".nav__items")){
        return;
    }

    console.log(e.target.parentElement)
    navMenuList.style.opacity = "0";
    navMenuList.style.transform = "translate(638px)";
    navCancel.style.display = "none";
    

});


// making share post Stick

const share = document.querySelector(".share");
const atricleHeader = document.querySelector(".article-txt__header");
document.addEventListener('scroll', () =>{

    if(window.scrollY >= share.offsetTop){
       share.classList.add("stick");
    }

    if(window.scrollY <= atricleHeader.offsetTop) {
        share.classList.remove("stick");
    }


    console.log(atricleHeader.offsetTop + " VS "  + window.scrollY)

})