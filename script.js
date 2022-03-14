// let i = 0;

// Do while loop acts before it checks
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// console.log("*********************");

// While loop checks before it acts
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// Break and continue
// for (let i = 0; i <10; i++) {
//     if (i === 5) {
//         console.log("Five");
//         break;
//     }
//     console.log(i);
// }

// Function
function mySelf() {
    console.log("My name is John Doe.");
}

mySelf("John Doe");
mySelf("Jane Doe");
mySelf("Giphty Doe");

function add(x, y) {
    let sum = x + y;
    console.log(sum);
}

add(5, 6);
add(6, 7);
add(7, 8);

// Function with return value
function add(x, y) {
    let sum = x + y;
    return sum;
}

let result = add(10, 15);
let newResult = result * 2;
console.log(newResult);

// Arrow function
let divide = (a, b) => a / b;
let multiply = (a, b) => {
    let sum = a * b;
    return sum;
}

console.log(divide(10, 5));
console.log(multiply(10, 5));

// Higher Order Function
// Is a function that takes a function as a parameter.
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map((number) => number * number);
let doubles = numbers.map((number) => number + number);
console.log(squares);
console.log(doubles);

let evens = numbers.filter((number) => number % 2 === 0);
let odds = numbers.filter((number) => number % 2 !== 0);
let odds2 = numbers.filter((number) => number % 2 === 1);
console.log(evens);
console.log(odds);

let five = numbers.find((num) => num === 5);
console.log(five);

// String- any character on the keyboard which is in quote("")
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.charCodeAt(10));
console.log(sentence.concat(", Miss Ewura says."));
console.log(sentence.endsWith("dog"));
console.log(sentence.endsWith("lazy"));
console.log(sentence.includes("hardworking"));
console.log(sentence.indexOf("o", 13));
console.log(sentence.lastIndexOf("o"));
console.log(sentence.padStart(100));
console.log(sentence.padEnd(100));
console.log(sentence.repeat(2));
console.log(sentence.replace("lazy", "hardworking"));
console.log(sentence.slice(20, 31));
console.log(sentence.substring(20, 31));
console.log(sentence.split(" "));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
