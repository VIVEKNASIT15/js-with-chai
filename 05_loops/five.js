const coding =["js","ruby","py","c"]

coding.forEach( function (val) {
      //  console.log(val);
        
        
    }
)

coding.forEach((item) =>
{
  //  console.log(item);
    
})

coding.forEach((item,index,arr) =>
{
   // console.log(item,index,arr);
    
}
)

const myCoding =
    {
        name:"java script",
        file: "js"
    }
    
// myCoding.forEach((item)=>{
//    // console.log(` name is ${item.name} and file is ${item.file}` );
    
   
// })
// const copy = {...myCoding}
// console.log(copy);
// const descriptor1 = Object.getOwnPropertyDescriptor(myCoding, 'name');
// console.log(descriptor1.configurable);
// console.log(descriptor1.value);

const Object1= Object.create(myCoding);
console.log(Object.getPrototypeOf(Object1)===myCoding);
