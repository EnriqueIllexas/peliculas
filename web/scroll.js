window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
    var botton = document.querySelector(".button-nav");
    botton.classList.toggle("abajo",window.scrollY>0);
})