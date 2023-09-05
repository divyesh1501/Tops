let tbtn = document.querySelector(".tbtn");
let nav = document.querySelector(".navbar");
let icon = document.querySelector(".fa-bars")
tbtn.addEventListener("click",function(){
    nav.classList.toggle("nav-bar");
    if(nav.classList.contains("nav-bar") == true){
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-close")
    }else{
        icon.classList.remove("fa-close")
        icon.classList.add("fa-bars")
    }
})