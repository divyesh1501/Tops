let tbtn = document.querySelector(".tbtn")
let nav = document.querySelector(".navbar")
let closebtn = document.querySelector(".closebtn")
tbtn.addEventListener("click", function(){
    nav.classList.toggle("nav-bar");
})
closebtn.addEventListener("click", function(){
    nav.classList.remove("nav-bar")
})