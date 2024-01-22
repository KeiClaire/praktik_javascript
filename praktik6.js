// // contoh 1
// let number = 10 + "10";
// console.log(number);

// // contoh 2
// let str = "42";
// let num = ++str; // unary operator
// console.log(num)

// // contoh 3
// const birthYear = prompt("Tahun Berapa Kamu Lahir?");
// const yourAge = 2024 - Number(birthYear);
// console.log(yourAge);

// // contoh 4
// let num = 42;
// let str = String(num);
// console.log(str);

const age = 20;
const height = 167;
const weight = 60;
const isStudent = true;

const ageAsString = String(age);
const heightAsString = height + "cm";
const weightAsString = weight + "kg";
const studentStatus = Number(isStudent);

console.log(typeof ageAsString);
console.log(typeof heightAsString);
console.log(typeof weightAsString);
console.log(typeof studentStatus);
