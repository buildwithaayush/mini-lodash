/*
Applies a transformation function to each element of an array
@param  {Array} arr - the source array 
@param {function} fn - transformation function (item,index,array) => newItem
@returns {Array} new array with transformed values 
 */

function map(arr,fn){
    let result = []
    for(let i = 0; i< arr.length ; i++){
        let ans = fn(arr[i],i,arr);
        result.push(ans)
    }
    return result; 
}

let arr = [2,3,5,6]
// let ans = map(arr,(n)=> n * 2)
// console.log(ans)

function filter(arr,fn){
    let result = []
    for(let i= 0; i<arr.length ; i++){
    if(fn(arr[i],i,arr)){
        result.push(arr[i])
    }
    }
    return result;
}

// let ans = filter(arr,(n)=>n%2==0)
// console.log(ans)

function reduce(arr,fn,initial){
    let acc = initial;
    let startIndex = 0;
    if(acc === undefined){
        acc = arr[0];
        startIndex = 1;
    }
    for(let i = startIndex ; i < arr.length ; i++){
        acc = fn(acc,arr[i],i,arr)
    }
    return acc;
}

// step 5
// find(arr,n) - returns the first element where fn returns true or undefined 
function find(arr,fn){
    for(let i = 0 ; i< arr.length ; i++){
        if(fn(arr[i],i,arr))return arr[i]
    }
    return undefined;
}

// every(arr,fn) returns true only if fn returns true for ALL element
function every(arr,fn){
    for(let i = 0; i < arr.length ; i++){
        if(!fn(arr[i],i,arr)) return false
    }
    return true;
}

function some(arr,fn){
    for(let i = 0 ; i < arr.length ; i++){
        if(fn(arr[i],i,arr)) return true
    }
    return false;
}

// Section 3 Part 2: Advanced Array + deepClone 

// step 6 Build flatten(array)
//flatten([1, [2, [3, [4]]]]) should return [1, 2, 3, 4] — all nested levels collapsed into one flat array.

// function flatten(arr){
//     return arr.reduce((acc,item)=> {
//         if(Array.isArray(item)){
//             return acc.concat(flatten(item))
//         }
//         return acc.concat(item)
//     },[])
 
// }

// flatten array 

function flatten(arr){
    return arr.reduce((acc,item)=>{
        for(let i = 0 ; i < arr.length ; i++){
            if(Array.isArray(item)){
                return acc.concat(flatten(item))
            }
            return acc.concat(item)
        }
    },[])
}
// let arr2 = [1, [2, [3, [4]]]]
// let ans = flatten(arr2)
// console.log(ans)

// // chunk(arr,size)
function chunk(arr,size){
    let result = []
    for(let i = 0 ; i < arr.length ; i+=size){
        result.push(arr.slice(i,i+size))
    }
    return result 
}

// groupBy + deepClone 

function groupBy(arr,keyFn){
    return arr.reduce((acc,item)=>{
        const key = keyFn(item);
        if(!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    },{});
}

module.exports = { map, filter, reduce, find, every, some, flatten, chunk, groupBy };