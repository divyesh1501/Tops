
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let res = document.getElementById("msg");
 
    document.getElementById("add").addEventListener
    ("click",function() {
        res.innerText =
        parseInt(num1.value) + parseInt(num2.value);  
    })
    document.getElementById("sub").addEventListener
    ("click",function() {
        res.innerText =
        parseInt(num1.value) - parseInt(num2.value);  
    })
    document.getElementById("mul").addEventListener
    ("click",function() {
        res.innerText =
        parseInt(num1.value) * parseInt(num2.value);  
    })
    document.getElementById("div").addEventListener
    ("click",function() {
        res.innerText =
        parseInt(num1.value) / parseInt(num2.value);  
    })
    document.getElementById("mod").addEventListener
    ("click",function() {
        res.innerText =
        parseInt(num1.value) % parseInt(num2.value);  
    })