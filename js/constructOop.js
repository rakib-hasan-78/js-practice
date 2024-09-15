export var ConsFac = function (width, height, targetName) {
    this.width = width;
    this.height = height;
    this.area = function(){
      var count = this.width * this.height;
      console.log(`${targetName} area is ${count} SqKm.`)
    }  
  }


export var PrivateConstructor = function (width, height, targetName) {
  this.width = width
  this.height = height
  // positions
  var position = {
    x:13,
    y:21
  }
  Object.defineProperty(this, 'position',{
    get: function() {
      return position
    },
    set: function(value) {
      position = Object.assign(position, value)
    }
  })
  // multiply
  var multiply = function () {
    var calc = this.width * this.height
    console.log(`Multiplication Of ${targetName} Is = ${calc}`)
  }.bind(this);
  // add
  var add = function() {
    var calc = this.width + this.height
    console.log(`Adds Value Of ${targetName} Is = ${calc}`)
  }.bind(this);
  // substract
  var substract = function() {
    var calc = this.width -  this.height
    console.log(`Substraction Of ${targetName} Is = ${calc}`)
  }.bind(this);
  // devide 
  var devide = function() {
    var calc = this.width / this.height
    console.log(`Devidation Of ${targetName} Is ${calc}`)
  }.bind(this);
  // result methods 
  this.resultAdd = function() {
    console.log(this);
    add();
    console.log(`Object Position : ${JSON.stringify(position)}`)
  }

  this.resultSubstract = function() {
    console.log(this);
    substract();
    console.log(`Object Position : ${JSON.stringify(position)}`)

  }

  this.devide = function() {
    console.log(this);
    devide();
    console.log(`Object Position : ${JSON.stringify(position)}`)

  }

  this.multiply = function() {
    console.log(this);
    multiply();
    console.log(`Object Position  : ${JSON.stringify(position)}`)

  }

}