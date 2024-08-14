let namePrint = new Promise((resolve, reject) => {
    resolve({ FirstName: "Divyesh" });
});
namePrint.then((result1) => {
    setTimeout(() => {
        console.log("result1-->", result1);   
    }, 3000);
    return {LastName: "Patel" };
})
    .then((result2) => {
        setTimeout(() => {
            console.log("result2-->", result2);
        }, 6000); 
        return {city: "valsad"}
    })
    .then((result3) => {
        setTimeout(() => {
            console.log("result3-->", result3)
        }, 9000);
    })


