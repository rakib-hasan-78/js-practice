export const numbers = () => {
    // number ---> primitive data
const n = 23.54;
const x = Number('47');
console.log(`data type is `,typeof x);
const convert = parseFloat(n);
const convertInt = parseInt(n);
console.log(`floating number is : ${convert} & int number is ${convertInt}`);

// *** max value we can count or store--->
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// **** infinity return 

console.log(1/0);

// NAN 

console.log('vgy'- 12);
}