
// theme change
 let icon = document.querySelector(".fa-moon");
 let header = document.querySelector("header");
 icon.addEventListener("click", function() {
    document.body.querySelector(".section1").classList.toggle("darkmode");
    document.body.querySelector("header").classList.toggle("header-fix");

    if (document.body.querySelector(".section1").classList.contains("darkmode") == true){
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    }else{
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    }
 })