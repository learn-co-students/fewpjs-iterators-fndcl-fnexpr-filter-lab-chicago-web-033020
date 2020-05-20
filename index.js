// Code your solution here
function fuzzyMatch(drivers, string){
    let matches = drivers.filter(element => {
        let sliced = element.slice(0, string.length)
        if (sliced === string){
            console.log(element)
            return element
        }
    })
    return matches
}

function findMatching(drivers, string){
    let matches = drivers.filter(element => {
        if (element.toUpperCase() === string.toUpperCase()){
            return element
        }
    })
    return matches
}


function matchName(drivers, string){
    let matches = drivers.filter(element => {
        if (element.name === string){
            return element
        }
    })
    return matches
}



// ## Demonstrate `filter()`

// The `filter()` method creates a new `Array` with all elements that pass certain tests provided
// function. Filter receives the same arguments as `map` (current item, index, and entire array)
// in the callback function, and works very similarly. The only difference is that the callback
// needs to return either _true_ or _false_. If it returns _true_, the array keeps that element.
// If it returns false that element is filtered out.

// Here is the earlier example written with `filter()`:

// ```js
// let even = arr.filter(n => {
//   return n % 2 === 0;
// });
// even = [2,4,6]



// ### Write a Function To Case-insensitively Match `string`s

// Write `findMatching`- This function takes an array of `drivers` and a `string`
// as arguments, and returns the matching list of drivers. The function should be
// case insensitive.

// ### Write a Function To Partially Match Substrings

// Write `fuzzyMatch` - This function takes an array of `drivers` and a `string`
// as arguments for querying the array, and returns all drivers whose names begin
// with the provided letters.

// ### Write a Function To Match `object` Values To a Provided `string`

// Write `matchName` - This function takes an array of `drivers` and a `string` as
// arguments. In this function, each element of the `drivers` array is a
// JavaScript object that has a property of `name`. The function should return
// each element whose `name` property matches the provided `string` argument.
