const user={
      username :'vivek',
      price :80000,

      welcomeMessage :function(p) {
        console.log( `${this.username   } , welcome to website`);

        
      }
}
user.welcomeMessage()
user.username ='yatin'
user.welcomeMessage()

//console.log(this);
// function viv(){
//      const username =" vivek"
//      console.log(this.username);
// }
// viv()
// const chai = function () {
//     let username ="vivek"
//     console.log(username);
  
// }
// chai()

const viv =() => {
    let username ="vivek"
    console.log(this);
    
}
viv()

// const addTwo = (num1,num2) => {
//     return num1 +num2
// }
// console.log(addTwo(80,50));

// const addTwo = (num1,num2) => (num1 +num2)
    

// console.log(addTwo(80,50));

// const myArray =[5,6,89,9]
// myArray.forEach((element ,index, array)=> {
//    array[index]= element*element
// });

// console.log(myArray);

// const myArray =[225,36,256,9]
// myArray.forEach((element ,index, array)=> {
//    array[index]= Math.sqrt(element);
// });

// console.log(myArray);

 const myArray =[225,36,256,5]
myArray.forEach((element ,index, array)=> {
   //array[index]= Math.pow(element,2);
   array[index]= Math.pow(element,3);
});

console.log(myArray);

