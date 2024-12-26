const myObject= {
    js:"javascript",
    cpp:'c++',
    rd:'ruby',
    py:'python'
}

// for in
for (const key in myObject) {
//  console.log(`${key} shortcut is for ${myObject[key]}`);
  
}

const programming = ["js", "py","cpp","rb","c"]
for (const key in programming) {
    console.log(programming[key]);
     
}

// const map = new Map()
// map.set('15',"kid")
// map.set('19',"adult")
// map.set('25',"young")
// map.set('60',"old")
// map.set('25',"young")
// map.set('60',"old")

// for (const key in map) {
//    console.log(key);
// }
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key of map) {
   console.log(key);
   
}