
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. print 9th and 10th index of array
        let a = arr.slice(9,10)
        console.log(a)

// 2. print every element of array by map and for loop

// by map

        arr.map((e) =>{
            console.log("Element print by map :",e)   
        })

//  by loop

        arr.forEach((e) =>{
            console.log("Element print by foreach :",e)
        })

// 3. change a value of 6th index with 100

        arr[6] = 100;
        console.log(arr)

// 4. print a array till element value not grater then 100
        let m = arr.filter((e) => {
            return e < 100
        })
        console.log("m:", m)
    
// 5. add 1 in every element of an array

        let  b = arr.map((e) => {
            return e + 1
        })
        console.log(b)

// 6. add 0 in start of array

        let c = arr.unshift(0)
        console.log(arr)

// 7. add  99 in end of array

        let x = arr.push(99)
        console.log(arr)

// 8. remove 1 element from start of  array

        let y = arr.shift(1)
        console.log(arr)

// 9. remove 1 element from end of array

        let z = arr.pop(1)
        console.log(arr)

// 10. do sum of all value of an array with use of map, reduce and for-loop

    // sum using by reduce method
        let redsum = arr.reduce((lrv,e) => {
            return e + lrv
        })
        console.log("redsum:", redsum)
    
    //  sum using by for loop method
        let loopsum = 0
        
        for (let i = 0;i < arr.length; i++) {
            loopsum += arr[i]
        }
        console.log("loopsum:", loopsum)

    // sum using by map method
        let mapsum = 0
        
        arr.map((e) => {
            return mapsum += e
        })
        console.log("mapsum:", mapsum)

// 11. sort a array in acending decending

    // acending
        arr.sort((a,b) => a - b)
        console.log(arr)

    // decending
        arr.sort((a,b) => b - a)
        console.log(arr)

// 12. reverce an array with use of method

        arr.reverse()
        console.log(arr)

// 13. reverce an array with use of for-loop
        let rev_array = []
        for (let i = arr.length - 1; i >= 0; i--) {

        rev_array.push(arr[i]);

        }
        console.log("reverce array:", rev_array)
// ___________________________________________________________________________________

// task-2
let arr1 = [1,2,3,6,7,9,3,56,8]

// 1. give all value which can devided by 2 - not use filter

        result = []

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] % 2 === 0) {
                result.push(arr1[i]);
            }
        }
        console.log("value which can devided by 2:", result);

// 2. give all value above 3 by use of filter

        let farr = arr1.filter((e) =>{
            return e > 3
        } )
        console.log("all value above 3:", farr)

// 3. give index of 56

        let findex = arr1.findIndex((e) => {
            return e === 56
        })
        console.log("index of 56:", findex)

// 4. give true/false result when check given value is exists in array or not      
        
        let incarr = arr1.includes(1)
        console.log("true/false:", incarr)
        

// ___________________________________________________________________________________

// task-3

        let namearr = ['i', 'am', 'urvish'];

// 1. ['i','am', 'urvish'] ==> want ['urvish','am','i']

    // by Map
        let reversedarr = namearr.map((value, index, namearr) =>{
        return namearr[namearr.length - 1 - index];
        });
        console.log("by Map:", reversedarr);
        
    // by loop
        let reversedarr1 = [];

        for (let i = namearr.length - 1; i >= 0; i--) {
        reversedarr1.push(namearr[i]);
    }
        console.log("by loop:", reversedarr1)


// 2. want "i am urvish" without use join method

    // by loop
        let result = "";

        for (let i = 0; i < namearr.length; i++) {
        result += namearr[i];
        if (i < namearr.length - 1) {
            result += " ";
        }
        }
        console.log("Using a Loop:", result);

// ___________________________________________________________________________________

// task-4
let namearr1 = ['i', 'am', 'urvish']

// // ['i','am', 'urvish'] ==> want ['hsivru','ma','i']

// // by use of loop

let res = [];

for (let i = 0; i < namearr1.length; i++) {
    let a = namearr1[i].split("")
    a.reverse()
    a = a.join("")
    res.unshift(a);
}
console.log("===>:", res)
