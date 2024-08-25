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

