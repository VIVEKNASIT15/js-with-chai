var c = 3
let a = 3
const b=500
if (true) {
    let a = 10
    const b = 20
    var c = 200
     console.log("INNER: ", b);
}
console.log(a);
console.log(b);
console.log(c);

function one() 
{
    const Username="VIVEK"
    function two(){
      const website = "you tube"
      
    console.log(website);
    }
    two()


console.log(Username);
}
one()

if(true){
    const username= "vivek"
    if (username==="vivek"){
        const website ="youtube"
      console.log(username +   website);
       console.log(username);     
    } 
}

// hosting basics
console.log(addone(8));

function addone(num){
    return num +1
}
