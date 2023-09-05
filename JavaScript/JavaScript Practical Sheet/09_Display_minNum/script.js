function check_min_num() {
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;

if (num1 < num2) {
    document.getElementById("msg").innerText = num1 + " is minimum"
    return false;

} else if ( num2 < num1) {
    document.getElementById("msg").innerText = num2 + " is minimum"
    return false;

} else {
    document.getElementById("msg").innerText = "Both are same"
    return false;
}
}
