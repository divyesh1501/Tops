let count = setInterval (updateNum, 60);
let start = 100;

function updateNum() {
    let counting1 = document.getElementById("count1");
    let counting2 = document.getElementById("count2");
    let counting3 = document.getElementById("count3");
    let counting4 = document.getElementById("count4");
    counting1.innerHTML = ++start;
    counting2.innerHTML = ++start;
    counting3.innerHTML = ++start;
    counting4.innerHTML = ++start;

    if (start == 2500) {
        clearInterval(count)
    }
}