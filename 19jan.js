// 1.) Describe Higher order functions.
// Ans) Functions that operate on other functions, either by taking
//      them as arguments or by returning them, are called higher-order functions.

// 2. Write use cases+ any one code example for map, filter and reduce
 
//------ Map ------// 

const arr = [1, 2, 3, 4, 5];
function double (x){
    return x * 2;
}
const output = arr.map(double);
console.log(output);             // output [2, 4, 6, 8, 10]



//------ filter ------//

const arr = [5, 1, 2, 3, 6];
function isOdd(x){
    return x % 2;
}
const output = arr.filter(isOdd);
console.log(output);


//------ reduce ------//

const arr = [5, 1, 3, 2, 7];
function findSum(arr){
    let sum = o;
    for (let i = 0; i < arr.length; i++); {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));
