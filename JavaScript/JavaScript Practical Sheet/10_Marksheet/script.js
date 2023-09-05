function mark() {
    var sub1 = parseInt(document.getElementById("sub1").value);
    var sub2 = parseInt(document.getElementById("sub2").value);
    var sub3 = parseInt(document.getElementById("sub3").value);
    var sub4 = parseInt(document.getElementById("sub4").value);
    var sub5 = parseInt(document.getElementById("sub5").value);
    var sub6 = parseInt(document.getElementById("sub6").value);
    var sub7 = parseInt(document.getElementById("sub7").value);

    if ( sub1 > 50 || sub2 > 50 || sub3 > 50 || sub4 > 50 || sub5 > 50 || sub6 > 50 || sub7 > 50){
        alert("Please Enter mark in range of 50");
        return false;

    }else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7;
        var avg = total/350 * 100;

        document.getElementById("msg1").innerText = total
        document.getElementById("msg2").innerText = avg
        return false;
    }
}