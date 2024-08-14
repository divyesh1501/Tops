/*
let arr = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 5]
console.log("arr:", arr)

// push(...items) – adds items to the end,
arr.push()

// pop() – extracts(remove) an item from the end,
arr.pop()

// shift() – extracts(remove) an item from the beginning,
arr.shift()

// unshift(...items) – adds items to the beginning.
arr.unshift(0)

// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

let a1 = [1, 2, 3, 4,]
let a2 = [5, 6, 7, 8]
let a3 = a1.concat(a2,  "test")
console.log("🚀 ~ file: array.js:21 ~ a3:", a3)

// reverse() – reverses the array in-place, then returns it.

arr.reverse()
console.log("🚀 ~ file: array.js:23 ~ arr:", arr)

// sort(func) – sorts the array in-place, then returns it.

let sArr = [1, 5, 8, 23, 5, 2]
sArr.sort((a,b) => a-b)
console.log("sArr:", sArr)

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
console.log(arr)
let index = arr.indexOf(3)
let index2 = arr.lastIndexOf(5)
console.log("index:", index)
console.log("index2:", index2)

// includes(value) – returns true if the array has value, otherwise false.
let inc = arr.includes(50)
console.log("inc:", inc)

*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5]
console.log("arr:", arr)

// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

// let subArr = arr.slice(1, 4)
// console.log("subArr:", subArr)

// let subArr = arr.slice(1, -2)
// console.log("subArr:", subArr)

// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// arr.splice(3, 4) // remove
// console.log("arr:", arr)

// arr.splice(1, 3, "1", "2") //add and remove
// console.log("arr:", arr)


// arr.splice(9, 0, "10") // only add
// console.log("arr:", arr)

// find/filter(func) – filter elements through the function, return first/all values that make it return true.

// let x = arr.find((e) => {
//     console.log("--->", e)
//     return e === 5
// })

// let filterData = arr.filter((e) => {
//     console.log("--->", e)
//     return e === 5
// })

// findIndex is like find, but returns the index instead of a value.

let ind = arr.findIndex((ele) => {
    return ele > 6
})
console.log("🚀 ~ file: array-method.js:87 ~ ind ~ ind:", ind)
