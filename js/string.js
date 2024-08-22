export const strings = () => {
    const st = 'string';   // this is string literal 
    const stri = "string";
    const string = `string---`;

    console.log(' all are '+ st + ' ' + stri+ '  '+ string);

    const str = String(234); // this is string constructor
    console.log(str)

    const n = 211;
    const s = n.toString();
    console.log(typeof s)

}