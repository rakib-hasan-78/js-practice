import { booleans } from './js/booleans';
import { numbers } from './js/number';
import { strings } from './js/string';

import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
      <h1>hello world !!!!!</h1>
  </div>
`
numbers(); // lesson 1
strings(); // lesson 2
booleans(); //lesson 3



const n = 100;
const x = + '1000'
console.log(typeof x)

var r = 21
var y = 12
console.log(r%y)

r++;
console.log(++r)


// math function  
let math = 22.95214;
let result = Math.abs(math);
console.log(result);
const round = Math.round(math)
console.log(round);
let floor = Math.floor(math);
console.log(floor);
let ceil = Math.ceil(math)
console.log(ceil)
console.log(Math.max(103,2382,304))
console.log(Math.min(1231, 313,42,11,111))
console.log(Math.cbrt(27))

console.log(Math.pow(2,3))

// time function 

const date = new Date();
console.log(date.getTime(),  date.getMilliseconds())



// js conditions 

let x1 = 41;
let mod = 13;

if (!(x1%mod===2)) {
    console.log('no bhaghsesh is 2')
} else {
  console.log('got a number !!!')
}

if (!(mod>x1)) {
    console.log('prime number is ' + x1 )
} else {
  console.log('invalid number mod' + '(' + mod + ') + is larger number')
}

mod%2===0 ? console.log('${mod} is an even number'): console.log(`${mod} is an odd number`);

let wx = 0
switch (true) {
  case (wx<0):
  console.log(`${wx} is an invalid number`)
  break;
  case (wx===0):
  console.log(`${wx} is not a number`)
  break;
  case (wx%1!==0):
  console.log(`${wx} is  a  float number`)
  break;
  case (wx%2===0):
  console.log(`${wx} is  an even number`)
  break;
  case (wx%2===1):
  console.log(`${wx} is  an odd number`)
  break;

  default:
  console.log(`invalid number`)
  break;
}