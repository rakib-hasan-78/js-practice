export var ConsFac = function (width, height, targetName) {
    this.width = width;
    this.height = height;
    this.area = function(){
      var count = this.width * this.height;
      console.log(`${targetName} area is ${count} SqKm.`)
    }  
  }
