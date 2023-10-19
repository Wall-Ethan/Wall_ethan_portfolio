(function(){
    "use strict";
    console.log("fired");


    const button = document.querySelector("#button");
    const burgerCon = document.querySelector(".burgerCon");
    const lightBox = document.querySelector('#lightbox');


    function hamburgerMenu() {
        //console.log("burger time!")
        button.classList.toggle("expanded");
        burgerCon.classList.toggle("slideToggle");
    }

    button.addEventListener("click", hamburgerMenu);


})();