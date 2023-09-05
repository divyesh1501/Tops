function setgreencolor(){
    let box1 = document.querySelector(".box1");
    if(box1.style.backgroundColor != "green") {
        box1.style.backgroundColor = "green";
    } else {
        box1.style.backgroundColor = "transparent";
        return false
    }
}

function setbluecolor(){
    let box2 = document.querySelector(".box2");
    if(box2.style.backgroundColor != "blue") {
        box2.style.backgroundColor = "blue";
    } else {
        box2.style.backgroundColor = "transparent";
        return false
    }
}