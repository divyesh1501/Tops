function table(){
    let num = document.getElementById("number").value;
    let div = document.querySelector(".display");

    if( num == "" || num == null){
        alert("Enter value")
    } else{
        var res ="";
        for (let i = 1; i <= 10; i++ ) {
            res = res + num + "*" + i + "=" + num * i + "<br>"
        }
        div.innerHTML = res
        return false;
    }
}