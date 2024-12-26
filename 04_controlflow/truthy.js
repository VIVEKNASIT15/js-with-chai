const userEmail = []
if (userEmail) {
    console.log("got it");
    
} else {
    console.log("don't have" );
}
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length===0) {
//  console.log("array is empty");
    
// }
 
const person ={
    username:'vivek',
    age:'20'
}

if (person.username==='hy'){
    console.log("object is fully");
    
}else {
    console.log("sorry");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = null?? undefined 
val1 = undefined?? 45
console.log(val1);

// Terniary Operator
 
//condition ? true : false

const icecreamprice =50
 icecreamprice!=50 ? console.log("right "): console.log("wrong");
