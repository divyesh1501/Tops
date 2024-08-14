// var
// let
// const

// ---------------var -----------------------
var b
// console.log("🚀 ~ file: variable.js:7 ~ a:", a)
var a = 50;
console.log("🚀 ~ file: variable.js:9 ~ a:", a)
{
  b = 30;
}
console.log("🚀 ~ file: variable.js:12 ~ b:", b)

// ---------------let -----------------------
let x;
x = 40;

console.log(x);
{
  let n = 30;
  {
    let m = 20;
    {
      console.log(m);
    }
    console.log(n);
  }
  {
    let o = "test";
  }
  // console.log(m);
}
// ---------------const -----------------------
const c = 40;
let d = 1;
d++;
// d = d + 1;
console.log("🚀 ~ file: variable.js:39 ~ d:", d)
// const c = 40;
// c = 80;
console.log("🚀 ~ file: variable.js:41 ~ c:", c)
{
  {
    const m = 50;
    console.log("🚀 ~ file: variable.js:45 ~ m:", m)
  }
  console.log("🚀 ~ file: variable.js:45 ~ m:", m)
}