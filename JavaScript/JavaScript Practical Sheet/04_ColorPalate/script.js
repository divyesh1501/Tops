function changeColor() {
    let box = document.querySelector(".colorbox");
    let color = document.getElementById("color").value;
   

    box.style.backgroundColor = color;
    return false
}