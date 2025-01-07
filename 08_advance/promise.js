new Promise(function(resolve,reject){
setTimeout(() => {
    console.log('helloo js user');
    resolve()
},2000)
})
.then(function () {
    console.log("no i am not js user ");
  
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseTwo=new Promise(function(resolve,reject) {
    setTimeout(function() {
         let error =false
         if(!error){
            resolve({username:"vivek",password:"159"})
         }
         else{
            reject('error: wrong') 
        }

    },1000)
    
})
promiseTwo
.then(function(user){
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error) {
    console.log(error); 
}).finally(()=> console.log("the promise is resolved"));
 
