//for

// for (let j = 0;j <= 10;j++) {
//     const element =j;
//     if (element==10) {
//         console.log("element is 10");
        
//     }
//     console.log(element);

// }

for (let i = 1; i <= 10; i++) {
  //  console.log(`outer loop value:${i}`);
    for (let j = 1; j <= 10; j++) {
   // console.log(`inner loop value ${j} and inner loop ${i}`);
   // console.log(i + '*'+ j + '=' + i*j);
    }

}

let myArray =["vivek","yug","koki",..."..."]
//console.log(myArray.length);

for (let index = 0; index < 20; index++) {
        // if (index ==14) {
        //     console.log("detected 14");
        //     break
            
        // }
        // console.log(`value of i is ${index}`);
        
}
for (let index = 0; index <= 20; index++) {
    if (index ==0) {
        console.log("detected 0");
     continue 
    }
    console.log(`value of i is ${index}`);
    
}