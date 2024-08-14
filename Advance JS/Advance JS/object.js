let obj = {
    name: "divyesh",
    age: 26
}

let arr = []

for (const key in obj) {
    console.log("----", obj[key])
    // arr.push(key)
}

let key = Object.keys(obj)
console.log("key:", key)

let value = Object.values(obj)
console.log("value:", value)

let ent = Object.entries(obj)
console.log("ent:", ent)

// ====important===

// let o = {
//     a: { a2: 30 }, b: 90, c: 70
// }
// let x = "a"

// console.log("==>", o[x].b)
