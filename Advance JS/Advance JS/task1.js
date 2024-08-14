/*
-> Want to re-use variable name so which variable declare method should i use

------------------------------------------------------------------------------------------

-> give the list which variable name not works in js

1. let "a"=0
2. let 'a'=0
3. let `10`=0
4. let 1=0
------------------------------------------------------------------------------------------

let x = 100
var y = 100
const z = 100
const m
{
      x= 90
      y= 90
      z= 90
      console.log(x) _________90__________ point-x1
      console.log(y) _________90__________ point-y1
      console.log(z) _________90__________ point-z1
      console.log(m) ______Missing initializer in const declaration 
} 

console.log(x) _______100____________ point-x2
console.log(y) _______100____________ point-y2
console.log(z) _______100____________ point-z2

what will print at x1-__x1 is not defined_____
what will print at y1-__90_____
what will print at z1-__z1 is not defined_____
what will print at x2-___100____
what will print at y2-___100____
what will print at z2-___100____

------------------------------------------------------------------------------------------

-> task-2

console.log(x) ______x is not defined_____________ point-x2
console.log(y) ______100_____________ point-y2
console.log(z) ______z is not definrd_____________ point-z2

{
      let x = 100
      var y = 100
      const z = 100
}

console.log(x) ________x is not defined___________ point-x1
console.log(y) ________100___________ point-y1
console.log(z) ________z is not defined___________ point-z1


what will print at x1-__x1 is not defined_____
what will print at y1-__100_____
what will print at z1-__z1 is not defined_____
what will print at x2-__x2 is not defined_____
what will print at y2-___100____
what will print at z2-___z2 is not defined____

------------------------------------------------------------------------------------------

*/

