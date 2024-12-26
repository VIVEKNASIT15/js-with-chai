const myNums =[1,2,3,4,5,6]
//  const myTotal=myNums.reduce(function(acc,currv){
//     console.log(`acc: ${acc} and currv: ${currv}`); 
//     return acc * currv

//  } , 1)
const myTotal = myNums.reduce( (acc, curr) => acc*curr, 9)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,itemName)=> acc+ itemName.price, 0)
console.log(priceToPay);
