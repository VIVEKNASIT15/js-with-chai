
function sayMyName(){
    console.log("v");
    console.log("I");
    console.log("v");
    console.log("E");
    console.log("k");
   
}

// sayMyName()

//  function addTwoNumbers(number1, number2){

//      console.log(number1+number2);
//     return addTwoNumbers
//      }    
     
// addTwoNumbers(8,80)

 
function addTwoNumbers(number1, number2){

    let result = number1 + number2
    console.log("vivek");
    return result
 }
 const result = addTwoNumbers(200,56)
 console.log("result: ",result);

 function loginUserMessage(username="viv")
{
if(!username){
    console.log("Please enter a username");
    return
}
return `${username} just logged in`
}
console.log(loginUserMessage("vivek"));

function calculateCartPrice(val1,val2, ...num1){
    return val1
}
console.log(calculateCartPrice(200,8500,500,1002));

const user = {
    username: "vivek",
    prices: 199
}
 
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
//handleObject(user)
handleObject(
    {
        username:"viv",
        prices:555
    }
 )
const myNewArray =[100,200,300,500,800]
function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([7000,50000,1000,5000,2000]));


