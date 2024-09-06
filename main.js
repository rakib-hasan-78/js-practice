import { booleans } from './js/booleans';
import { numbers } from './js/number';
import { strings } from './js/string';

import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
      <h1>hello world !!!!!</h1>
  </div>
`
// numbers(); // lesson 1
// strings(); // lesson 2
// booleans(); //lesson 3



// const n = 100;
// const x = + '1000'
// console.log(typeof x)

// var r = 21
// var y = 12
// console.log(r%y)

// r++;
// console.log(++r)


// // math function  
// let math = 22.95214;
// let result = Math.abs(math);
// console.log(result);
// const round = Math.round(math)
// console.log(round);
// let floor = Math.floor(math);
// console.log(floor);
// let ceil = Math.ceil(math)
// console.log(ceil)
// console.log(Math.max(103,2382,304))
// console.log(Math.min(1231, 313,42,11,111))
// console.log(Math.cbrt(27))

// console.log(Math.pow(2,3))

// // time function 

// const date = new Date();
// console.log(date.getTime(),  date.getMilliseconds())



// js conditions 

// let x1 = 41;
// let mod = 13;

// if (!(x1%mod===2)) {
//     console.log('no bhaghsesh is 2')
// } else {
//   console.log('got a number !!!')
// }

// if (!(mod>x1)) {
//     console.log('prime number is ' + x1 )
// } else {
//   console.log('invalid number mod' + '(' + mod + ') + is larger number')
// }

// mod%2===0 ? console.log('${mod} is an even number'): console.log(`${mod} is an odd number`);

// let wx = 0
// switch (true) {
//   case (wx<0):
//   console.log(`${wx} is an invalid number`)
//   break;
//   case (wx===0):
//   console.log(`${wx} is not a number`)
//   break;
//   case (wx%1!==0):
//   console.log(`${wx} is  a  float number`)
//   break;
//   case (wx%2===0):
//   console.log(`${wx} is  an even number`)
//   break;
//   case (wx%2===1):
//   console.log(`${wx} is  an odd number`)
//   break;

//   default:
//   console.log(`invalid number`)
//   break;
// }

// const d = new Date();
// const day = d.getDay();
// switch (day) {
//   case 0:
//   console.log(`Today is Sunday`)
//   break;
//   case 1:
//   console.log(`Today is Monday`)
//   break;
//   case 2:
//   console.log(`Today is Tuesday`)
//   break;
//   case 3:
//   console.log(`Today is Wednesday`)
//   break;
//   case 4:
//   console.log(`Today is Thursday`)
//   break;
//   case 5:
//   console.log(`Today is Friday`)
//   break;
//   case 6:
//   console.log(`Today is Saturday`)
//   break;

//   default:
//   console.log(`invalid day`)
//   break;
// }


//  it first converts its argument to a number using the Number() function

// let  sum = 0;
// let total = 0;
// for(let i =0; i<=20;i++){
//   if (i%2===0) {
//     console.log(sum + '+'+i +'='+(sum+i))
//     sum+=i;
//   }
// }
// console.log('Total sum = '+sum);

// for (let i = 0; i <=20; i++) {
//   if (i%2===1) {
//     console.log(total + '+'+i+'='+ (total+i)); 
//     total+=i;
//   }
// }
// console.log('Total Odd Number Sumasion ='+total);


// let isTrue = true;
// while (isTrue) {
//   let numbers = Math.round(Math.random()*10);
//   if (numbers===7) {
//     console.log('winner winner chicken dinner!')
//     break;
//   } else {
//     console.log(`you got ${numbers}`)
//   }
// }

// let m = 0;

// while (m<10) {
//   m++;
//   console.log(m)
// }

// function x11() {
//   if (m<10) {
//     m++;
//     console.log(m)
//     setTimeout(x11,1000)
//   }
// }
// x11()

// let dd = 5;
// for (let i = 1; i<=dd; i++) {
//   let em = ''
    
//     for (let j = 1; j<=i; j++) {

//         em += '* '
//     }

//     console.log(em);
// }


// const firstName = 'rakib';
// const lastName = 'hasan';
// const myName = firstName.concat(' ', lastName);
// console.log(myName);
// const results = firstName.padEnd(firstName.length+1,' ') + lastName
// console.log(results)
// console.log(myName.substring(6,11));

// const p = `The government has appointed senior lawyer Ehsanul Haque Shomaji as Dhaka Metropolitan public prosecutor.`;
// const pResult = p.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
// console.log(pResult);



// const xyz = `abcnsj ksjjhhavv ovakoiajv`;

// let length = 0;

// while(true){
//   if (xyz.charAt(length)==='') {
//     break
//   } else {
//     length++
//   }
// }
// console.log(length)
// console.log(xyz.length);

// let textLastIndex = `The government has appointed senior lawyer Ehsanul Haque Shomaji as Dhaka Metropolitan public prosecutor`;

// const textLastIndexSplitter = textLastIndex.split(' ').map(word=>word.slice(0, -1)+ word.charAt(word.length-1).toUpperCase()).join(' ');
// console.log(textLastIndexSplitter);

// let arr =[1,2,3,4,undefined,null,5,6,7,8,9,90];
// let container = 0;

// while (true) {
//   if (arr[container]===undefined) {
//       break
//   }else {
//     container++
//   }
// }
// console.log(`array length is ${container}`)

// while (container<arr.length) {
//     container++
// }

// console.log(`array length is ${container}`)


// let arr1 = [1,2,3,4,6,7,8,9];

// let targetedIndex = 3
// let assignedValue = 5
// let leng = arr1.length-1

// for (let i = leng; i>=targetedIndex; i--) {

//     arr1[i + 1] = arr1[i]
// }
// arr1[targetedIndex] = assignedValue;

// console.log(arr1)

// for(let i = targetedIndex; i<leng; i++){
//     arr1[i] = arr1[i + 1]
// }
// arr1.pop()

// console.log(arr1);

// let anotherArray = arr1.splice(2,4)
// console.log(anotherArray);


// let found  = false;
// let data = 78

// for (let i = 0 ; i<anotherArray.length-1; i++) {
//   if (anotherArray[i]===data) {
//     console.log(`data at index number ${i}`);
//     found = true;
//     break;
//   }
// }
// if(!found){
//   console.log(`${data} not found`)
// }

const ma = [
  [1,2,3,4],
  [5],
  [6,7]
];
const resulta = ma.flat(3);
console.log(resulta) 

for (let i = 0; i < ma.length; i++) {
  for(let j = 0; j<ma[i].length; j++){
    
      console.log(`values are ${ma[i][j]}`)
    
  }
  
} 
const reverseArray = [1,2,3,4,5,6,7,8,9,10];
for(let i =0; i<(reverseArray.length)/2; i++){
  let temp = reverseArray[i];
  reverseArray[i] = reverseArray[reverseArray.length-1-i];
  reverseArray[reverseArray.length-1-i] = temp;
}
console.log(reverseArray);



const r = Array.from(reverseArray);
console.log(r.reverse());

const obj = {
  x:10,
  y:20
}
const xyzz = 'x';
console.log(obj[xyzz])
obj.x = 20;
obj.z=5;
console.log(obj);


delete obj.x;

console.log(obj)

const pt = 'p';
obj[pt] = 11;

console.log(obj);

for (const i in obj) {
    console.log(`${i}:${obj[i]}`)
}

console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

const pq = Object.assign({}, obj);
console.log(pq)
pq.t=13;
const temp = 'l';
pq[temp] = 12
 pq.y=30

 delete pq.z;

 console.log(pq);


console.log(JSON.stringify(pq)===JSON.stringify(obj));

function person(name, email) {

    return{
      name:name,
      email:email 
    }
}

let p1 = person('musayeeb', 'example@xampl.com')
console.log(p1);

function add() {
  let i = 0
  let add =0
  while (i<arguments.length) {
    add += arguments[i]
    i++;
  }
  return add
}
let cal = add(1,2,3,4)
console.log(cal)


function greeting(msg, name) {

    function sayHi() {
      let names = name.split(' ')[0];
      console.log(msg, names)
    }
    sayHi()
}

greeting('hello', 'rakib hasan');


let ram = `16GB`;

function tech() {
  function x() {
    let ram = `128gb`
    console.log(ram)
  }
  x()
  ram = '100GB'
}

tech()
console.log(ram)

// first class & higher order function --->

function a(a,b) {
    return a+b;
}

function higher(a ,b, func) {
  var c = a+b;
  var d = a-b;

  function polti() {
    var v = func(a,b)
    return a *b *c *d *v;
  }
  return polti;
}
var b = higher(2,4, a);
console.log(b())


// clouser scope understanding ---->

let cv = 7

function mm() {
  console.log(cv)
  let rr = 78;
  return function () {
    return rr
  }
}

let res = mm()
console.dir(res);

// cb  understanding --->

function calc(a,b, cb) {
    let c = a+b;
    let d = a *b ;

     let  l = cb(c,d);
     return l
}

var u = calc(1,2, (c,d)=>{
  return c-d
})
console.log(u)

// how forEach method works behind the scence ======>

let ry= [1,2,3,2,4,5,7,8,9];

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr)
  }
}



forEach(ry, (value, index, prr)=>{
  console.log(value, index , prr)
})


forEach(ry, (value, index, prr)=>{
   prr[index] = value + 5
})

console.log(ry);



const mappi = [1,9,6,2];

function myMap(arr, cb) {
  let bima = []
  for (let i = 0; i < arr.length; i++) {
    let values = cb(arr[i], i, arr)
    bima.push(values);
  }
  return bima
}

const checkValues = myMap(mappi, (value, index, dictonary)=>{
  return value * 3  
})

console.log(checkValues);

console.log(mappi)


// filter method --->

const filtArr = [11,2,3,1,4,5,33,5,6,7];

function myFilter(arr, cb) {
  const temp =[];

  for(let i = 0; i<arr.length; i++){
     if (cb(arr[i], i, arr)) {
      temp.push(arr[i])
     }
  }
  return temp
}

const checkfilter = myFilter(filtArr, (value)=>{
    return value >= 9;
})
console.log(checkfilter)



const mainFilter = filtArr.filter((value) => value>=4)
console.log(mainFilter);


