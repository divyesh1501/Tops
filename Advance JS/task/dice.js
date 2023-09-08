function dicewithloop() {
    for (let i = 1; i > 0; i++) {
        let x = Math.trunc(Math.random() * 10) + 1
        if (x <= 6) return x
    }
}
let dice = dicewithloop()
console.log("num :", dice)


-----------------------------------------------------------------
    function dice() {
    let x = Math.trunc(Math.random() * 6) + 1
    console.log("dice num :", x)
}
dice()
