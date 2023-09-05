// navbar

 let tbtn = document.querySelector(".fa-bars");
 let nav = document.querySelector(".navbar");
 let closebtn = document.querySelector(".closebtn");
 let imgg = document.querySelector(".section1");
 tbtn.addEventListener("click", function () {
        nav.classList.toggle("nav-bar");
    })
 closebtn.addEventListener("click", function () {
        nav.classList.remove("nav-bar");
    })
 imgg.addEventListener("click", function () {
        nav.classList.remove("nav-bar");
    })