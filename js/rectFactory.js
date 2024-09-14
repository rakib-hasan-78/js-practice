export function rectFactory(width, height, rectName) {
    return {
      width: width,
      height:height,
      area:function () {
        var res = this.width * this.height;
        console.log(`${rectName} area is ${res} SQKM.`)
      }
    }
  }