// array

const myArr = [0, 1, 2, 3, 4, 5,1,0,2,3]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//Array methods
console.log(myArr.push(6));
console.log(myArr.push(8));
console.log(myArr);
console.log(myArr.pop(8));

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);


const intArray =[4,45,66,78,65]
const largestValue=(arr)=>{
    firstLargestValue=Math.max(...arr)
    
    index= arr.indexOf(firstLargestValue)
    arr.splice(index,1)
    secondLargestValue=Math.max(...arr)
    return(secondLargestValue)
}
console.log(largestValue(intArray));
