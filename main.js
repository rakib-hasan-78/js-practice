import { booleans } from './js/booleans';
import { ConsFac, PrivateConstructor } from './js/constructOop';
import { numbers } from './js/number';
import { rectFactory } from './js/rectFactory';
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

const filtArr = [11,2,3,1,4,5,33,6,7];

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


// reduce 

function myRed(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i])
  }
  return acc;
}

const checkRed = myRed(filtArr, (preValue, currValue)=>{
  return preValue + currValue;
}, filtArr[0])

console.log(checkRed);

const redMax = myRed(filtArr, function (preValue, currValue) {
  return Math.max(preValue, currValue)
},filtArr[0])

console.log(redMax)

const redMin = myRed(filtArr, (preValue, currValue)=>(Math.min(preValue, currValue)),filtArr[0])
console.log(redMin)

// find & findIndex--->

function myFind (arr, cb) {
  for (var i = 0 ; i<arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i]
    }
  }
}

var findVal = myFind(filtArr, (value)=>(value===2))
console.log(findVal)

function myIndex(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(i)) {
      return i;
    }
  }
}

var findInd = myIndex(filtArr, (index)=>(index===7))
console.log(findInd)

// index to value or viseversa --->

function mySearch(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      return arr[i], i
    }
  }  
}

var my_search = mySearch(filtArr, (value, index)=>{
  if (index===7) {
    return value
  }
})

console.log(my_search);

var my_index = mySearch(filtArr, (value, index)=>{
  if (value===7) {
    return index;
  }
})

console.log(my_index);

const my_value = filtArr.find((value)=>value===7)
console.log(my_value)

const my_search_index = filtArr.findIndex((value, index)=>{
  if (value===33) {
    return index
  }
});
console.log(my_search_index)

// return function from another function ---->

function greetings(msg) {
  return function (name) {
    return msg + ' '+ name
  }
}

var night = greetings('good night,')
console.log(night('rakib'))

function base(x){
  function power(n) {
    let result = 1
    for (let i = 0; i <x; i++) {
      result*=n
    }
    return result;
  }
  return power
}

var base3 = base(3)
console.log(base3(2))


function tonrec(n) {
  if(n===0) return;
  console.log(`Tonmay... TAMMAN!!!!`);
  tonrec(n-1)
}
tonrec(5)



function recurLoop(n) {
  if(n===1){
    return 1
  }
  return n + recurLoop(n-1)
}
console.log(recurLoop(5))

function recurMulti(x) {
  if (x===1) {
    return 1
  }
  return x * recurMulti(x-1)
}
console.log(recurMulti(5))


const array = [1, 2, 3, 4, 5];
function recursArr(arr) {
  if(arr.length===0) return 0;
  return arr[0] + recursArr(arr.slice(1)); 
}
console.log(recursArr(array))

function foul (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

console.log(foul(10)(11)(21))   

function endResult (imp){
  console.log(imp)
}
function multiply(n) {
  return n * 5
}
function adds(a,b) {
  return a + b
}
endResult(multiply(adds(2,3)));

function Objecth(){
  var b = new Date()
  var result = b.getTime()
  console.log(result)
}

Objecth()

// function declaration vs function expression 

xyzzz()

function xyzzz() {
  console.log('poet')
}



var pxw = function () {
  console.log('bimgo')
}
pxw()


function texting() {
  var msg = `hewllo worldds`
  return function () {
    console.log(msg)
  }
}

var rand = texting();
rand()


// for (let i = 1; i <= 5; i++) {

//   (function (n) {
//     setTimeout(function() {
//       console.log(n)
//     }, 1000 * n)
//   })(i)
// }
// oop starts here ----->

function myX(){
  console.log(this)
}
new myX()

var oopPrimary = {
  width:140,
  height:20,

  areaProperty:function () {
    var area = this.width + this.height;
    console.log(area)
    console.log(this)
    // this.rangeProperty(); 
  },
  rangeProperty:function () {
    var cal = this.width * this.height;
    console.log(`range is ${cal}`);
  }
}
oopPrimary.areaProperty()
console.log(oopPrimary.width);

var rect ={
  width : 20,
  height : 30,
  print: oopPrimary.rangeProperty,
  printArea: oopPrimary.areaProperty,
}
rect.print()
rect.printArea();




var rectOne = rectFactory(10,20,'rectOne');
rectOne.area()

var rectTwo = rectFactory(89, 76, 'Rect Two');
rectTwo.area();




var areal = new ConsFac(11,13, 'areal');
areal.area()


// creating custom new keywords--->

// function myNew(constructor) {
//   var temp = {}
//   Object.setPrototypeOf(temp, constructor.prototype);
//   let argsArray = Array.prototype.slice.apply(arguments);
//   constructor.apply(temp, argsArray.slice(1));
//   return temp;
// }

// var areal = myNew(ConsFac, 11,13, 'areal');
// areal.area()

// function myKeys(constructor) {
//   var obj = {};
//   Object.setPrototypeOf(obj, constructor.prototype)
//   var arrData = Array.prototype.slice.apply(arguments);
//   constructor.apply(obj, arrData.slice(1))
//   return obj
// }
// var areal = myKeys(ConsFac, 12,14, 'areal');
// areal.area()


// function is an object in js --->

var Ractt = new Function('width', 'height', 'targetName', `this.width = width;
    this.height = height;
    this.targetName = targetName;
    this.area = function(){
      var count = this.width * this.height;
      console.log(\`\${this.targetName} area is \${count} SqKm.\`)
    } `)

var pigol = new Ractt(11,12,'pigol')
pigol.area()


var pingol = {
  a:10,
  b:21,
}

function zas (c,d){
  var pont = this.a + this.b + c + d;
  console.log(pont)
}
zas.apply( pingol,[10,9])
zas.call(pingol,10,10)

var pingol = {
  a:10,
  b:21,
}

function nextTest() {
  return{
    addTest: function () {
      console.log(this.a + this.b)
    },
    addMulty: function () {
      console.log(this.a*this.b)
    },
    addAbstract: function () {
      console.log(this.a-this.b)
    },
    addDevide: function () {
      console.log(this.a / this.b)
    }
  }
}

var result = nextTest();
result.addTest = result.addTest.bind(pingol);
result.addMulty = result.addMulty.bind(pingol);
result.addAbstract = result.addAbstract.bind(pingol);
result.addDevide = result.addDevide.bind(pingol);
result.addAbstract();
result.addTest()


// call by value vs call by reference --->

var t = 30;

function xsw() {
  t = 20
  console.log(t)
}
xsw(t)
console.log(t)

var xc = {
  s:19
}

function tcf() {
  xc.s = 13
}
tcf(xc)
console.log(xc)

var givenValue = new PrivateConstructor(21,23, 'firstGivenValue');
givenValue.resultSubstract();
givenValue.devide();
givenValue.multiply();
givenValue.position={
  x:41,
  y:32
}

var givenValueTwo = new PrivateConstructor(12,11,'givenValueTwo');
givenValueTwo.position = {
  x:96,
  y:92,
  z:52
}
givenValueTwo.resultAdd();
console.log(givenValueTwo)

// propeerty descriptor 

var demoObj = {
  tonmay:'active earner',
  rakib:'weak earner',
  musayeeb:'baby'
}
Object.defineProperty(demoObj, 'rakib', {
  writable:false
})


console.log(Object.keys(demoObj))

// prototype in constructor 

ConsFac.prototype.PI=-3.1416
var myDEmoProto = new ConsFac(1,2,'ajjj');
console.log(myDEmoProto.PI) 

Array.prototype.myPoet= function () {
  console.log(`hello world`)
}

// extending prototype
function extendProto(parent, children) {
  children.prototype = Object.create(parent.prototype);
  children.prototype.constructor = children;
}

var Style = function(color) {
  this.color = color
}

var Cal = function() {}
Cal.prototype = {
  add: function() {
    var cal = this.width + this.height;
    console.log(`${this.target} add value, is = ${cal}`)
  },
  subtract: function() {
    var cal = this.width - this.height;
    console.log(`${this.target} subtract value, is = ${cal}`)
  },
  multiply: function() {
    var cal = this.width * this.height;
    console.log(`${this.target} multiply value, is = ${cal}`)
  },

  divide: function() {
    var cal = this.width / this.height;
    console.log(`${this.target} divide value, is = ${cal}`)
  }
}

var TestFunc = function(width, height, color, target) {
  this.width = width
  this.height = height
  Style.call(this, color)
  this.target = target
}

extendProto(Cal, TestFunc)

var b1 = new TestFunc(21,12,'orange', 'b1')
b1.divide()

class StyleColor {
  static getColor(color) {
    return color;
  }
}

class CalFunc {
  add() {
    const cal = this.width + this.height;
    console.log(`${this.target} add value, is = ${cal}`)
  }
  subtract(){
    const cal = this.width - this.height;
    console.log(`${this.target} subtract value, is = ${cal}`)
  }
  multiply(){
    const cal = this.width * this.height;
    console.log(`${this.target} multiply value, is = ${cal}`)
  }
  divide(){
    const cal = this.width / this.height;
    console.log(`${this.target} divide value, is = ${cal}`)
  }
}

class TargetClass extends CalFunc {
  constructor(width, height, target, color) {
    super()
    this.width = width
    this.height = height 
    this.target =target
    this.color = StyleColor.getColor(color)
  }
}

const b2 = new TargetClass(21, 12, 'b1', 'blue');
console.log(b2)

// oop mixins or prototypical compoitions 

var Living = function (name) {
  this.name = name 
}
function canWalk () {
  console.log(`can walk`)
}
function canEat () {
  console.log(`can Eat....`)
}
function canRead() {
  console.log(`can read....`)
}

function canSwim() {
  console.log(`can swim....`)
}
function canThink() {
  console.log(`can think ...`)
}

function canFly(){
  console.log(`can fly ....` )
}
function canSing() {
  console.log(`can sing....`)
}

function objectAssign(target, ...objects) {
  Object.assign(target, ...objects)
}

objectAssign(Living.prototype, {
  canWalk: canWalk,
  canEat: canEat,
  canRead: canRead,
  canThink: canThink,

});

const persn = new Living('Rakib');
console.log(persn)


class LivingThings {

    constructor(name){
      this.name = name
    }
}

const walking = {
  walk(){
    console.log(`can walk`)
  }
}

const sleeping = {
  sleep(){
    console.log(`sleeping`)
  }
}
const moving = {
  move(){
    console.log(`moving`)
  }
}
const diving = {
  canDive(){
    console.log(`diving `)
  }
}

const flying = {
  fly(){
    console.log(`flying`)
  }
}

const swimming = {
  canSwim(){
    console.log(`can swim`)
  }
}
const thinking ={
  think(){
    console.log(`can think`)
  }
}

const reading = {
  read(){
    console.log(`can read`)
  }
}

const singing = {
  canSing(){
    console.log(`can sing`)
  }
}

const canFlying = {
  canFly(){
    console.log(`can fly`)
  }
}


const applyMixin =(target, objects) => {
  objects.forEach(object => {
    Object.getOwnPropertyNames(object).forEach(name=>{
      target.prototype[name] = object[name]
    })
  })
}

class Human extends LivingThings{}
applyMixin(Human, [walking, sleeping, moving, reading, thinking])

const newPerson = new Human('rakib')
console.log(newPerson)


class Bird extends LivingThings {}
applyMixin(Bird, [walking, sleeping, moving, diving, flying]);
const bird = new Bird('Eagle')
console.log(bird)

class Dog extends LivingThings{}
applyMixin(Dog, [walking, sleeping, moving])

const newDog = new Dog('Bull Dog');
console.log(newDog)


class Creative extends LivingThings {}
applyMixin(Creative, [walking, sleeping, moving, reading, thinking, singing]);

const creativeOne = new Creative('Sultana Tonmay')
console.log(creativeOne);


function testFunction(msg=`hello`, name=`musayeeb`) {
  console.log(`${msg} !, ${name}`)  
}
testFunction('good morning', 'pigol')

function defaultMath(n=12) {
  n = n*n;
  console.log(n)
}
defaultMath(5)

const itArr = [12,2,3,44];
function arrIterator(constructor){
  let i = 0
  return {
    nextFunc(){
      return {
        done: i<= constructor.length,
        value: constructor[i++] 
      }
    }
  }
}
let firstFire = arrIterator(itArr);
console.log(firstFire.nextFunc())
console.log(firstFire.nextFunc())
console.log(firstFire.nextFunc())
console.log(firstFire.nextFunc())
console.log(firstFire.nextFunc())

let objj = {
  start:1,
  end:5,
  [Symbol.iterator]: function name() {
    let star = this.start;
    let self = this
    return{
      next(){
        return{
          done: star>self.end,
          value: star>self.end? undefined : star++
        }
      }
    }
  }
}
// for (const v  of objj) {
//   console.log(v)
// }

let iterate = objj[Symbol.iterator]();
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())



const obj21 = {
  name:`musayeeb`,
  parents:{
    father:'rakib',
    mother:'tonmay'
  },
  education:'not started yet',
  address:{
    present: 'kallyanpur, dhaka, bangladesh',
    permanent: 'aruapara, kushtia, bangladesh'
  },
  languages:{
    primary:'bangla',
    secondary:'english, arabic, latin, spanish'
  },
  nationality:'bangladesh'
}

let {name, nationality, education,
   languages:{secondary}, parents:{mother}, 
   address:{permanent}} =obj21;

console.log(name, nationality,
   education, secondary,
    mother, permanent)


// custom iteraror --->


function iterateFuction(constructor) {
  let i =0;
  return{
    next(){
      return{
        done: i>=constructor.length,
        value: i>=constructor.length? undefined : constructor[i++]
      }
    }
  }
}

const arrSampleOne = [12,21,3,42,122,33,29];
const checkVal = iterateFuction(arrSampleOne);
console.log(checkVal.next())
console.log(checkVal.next())
console.log(checkVal.next())
console.log(checkVal.next())
console.log(checkVal.next())
console.log(checkVal.next())
console.log(checkVal.next())
console.log(checkVal.next())

let objItr = {
  start:1,
  end:10,
  [Symbol.iterator]:function() {
    let starts = this.start;
    let self =this
    return{
      next(){
        return{
          done: starts>self.end,
          value: starts>self.end? undefined:starts++
        }
      }
    }
  }
}

for (const i of objItr) {
  console.log(i)
}

const itObj = objItr[Symbol.iterator]();
console.log(itObj.next())
console.log(itObj.next())
console.log(itObj.next())
console.log(itObj.next())
console.log(itObj.next())
console.log(itObj.next())
console.log(itObj.next())
console.log(itObj.next())
console.log(itObj.next())
console.log(itObj.next())



// generator 


let obj23 = {
  start: 12,
  end: 18,
  [Symbol.iterator]: function *() {
    let currValue= this.start;
    while (currValue<this.end) {
      yield currValue++
    }
  }
}

let resObj = obj23[Symbol.iterator]();
console.log(resObj.next())
console.log(resObj.next())
console.log(resObj.next())
console.log(resObj.next())
console.log(resObj.next())
console.log(resObj.next())
console.log(resObj.next())
console.log(resObj.next())



function* genFunc(collections) {
  let first = collections[i];
  let last = collections.length-1

  while (first<last) {
    yield first++
  }
}

let arrr = [1,2,3,4,5,6,7,8,9]

let checkArrRes = arrr[Symbol.iterator]();
console.log(checkArrRes.next())
console.log(checkArrRes.next())
console.log(checkArrRes.next())
console.log(checkArrRes.next())
console.log(checkArrRes.next())
console.log(checkArrRes.next())
console.log(checkArrRes.next())
console.log(checkArrRes.next())
console.log(checkArrRes.next())
console.log(checkArrRes.next())


const set = new Set([1,2,3,11]);
set.add(7);

let setRes = [...set].map(v=>v+2)
console.log(setRes)

for (let i of setRes) {
  console.log(i)  
}

let setIterate = (setRes.values())
console.log(setIterate.next())
console.log(setIterate.next())
console.log(setIterate.next())
console.log(setIterate.next())
console.log(setIterate.next())
console.log(setIterate.next())

const mapConst = new Map([
    ['a',1],
    ['b',2],
    ['c',3],
    ['d',4],
]);
mapConst.set('e',5);

console.log(mapConst)

let x ={a:10}, y={b:21}
let dataSet = new WeakSet([x,y])
let z = {
  z: 13
}
dataSet.add(z)
console.log(dataSet.has(z)) 


// class 

class TestOop {
  constructor(width,height){
    this.width= width,
    this.height = height
  }
  name = `pigool`
  draw(){
    console.log(this.width + this.height)
  }
}
const pigo = new TestOop(1,2)
pigo.draw()
console.log(pigo)


class MasterClass{
  add(){
    let total = this.width + this.height;
    console.log(`${this.name} of add value is ${total}`)
  }
}
class ColorClass {
  static myColor(color){
    this.color = color
  }
}

class Rectangle extends MasterClass{
  constructor(width, height, name, color){
    super(ColorClass)
    this.width= width
    this.height =height
    this.name = name
    this.color = color
  }
}

const r1 = new Rectangle(12,11,'r1','blue');
console.log(r1)
r1.add()



