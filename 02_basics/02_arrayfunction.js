const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)


console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

function rightAngledTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log('*'.repeat(i));
    }
}

rightAngledTriangle(5);
 
// let fruits = ['Apple', 'Banana', 'Mango'];

// // Using for loop
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // Using forEach method
// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });
let fruits = ['apple', 'banana'];
let moreFruits = ['cherry', 'mango'];

// Using concat method
let alFruits = fruits.concat(moreFruits);
console.log(alFruits);

// Using spread operator
let allFruits = [...fruits, ...moreFruits];
console.log(allFruits);



