
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

 /*function addTwoNumbers(number1, number2){

     console.log(number1 + number2);
 
     }    addTwoNumbers(89,"30")*/

 
/* function addTwoNumbers(number1, number2){

    let result = number1 + number2
    console.log("vivek");
    return result
 }
 const result = addTwoNumbers(200,56)
 console.log("result: ",result);*/

 function loginUserMessage(username="viv")
{
if(!username){
    console.log("Please enter a username");
    return
}
return `${username} just logged in`
}
console.log(loginUserMessage("vivek"));

// function calculateCartPrice(val1,val2, ...num1){
//     return val1
// }
// console.log(calculateCartPrice(200,8500,500,1002));

// const user = {
//     username: "vivek",
//     prices: 199
// }
 
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
// }
// //handleObject(user)
// handleObject(
//     {
//         username:"viv",
//         price:555
//     }
// )
// const myNewArray =[100,200,300,500,800]
// function returnSecondValue(getArray){
//     return getArray[3]
// }
// //console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([7000,50000,1000,5000,2000]));
