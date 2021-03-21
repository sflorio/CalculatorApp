let calImport = require("../calculator.js");
let constants = require("../models/constants.js");



let input = "(4+63)*3";


var res = calImport.tokenizar(input);
console.log("Processed " + res.lenght + " termns" );
res.forEach(e => console.log(e));


var calcExample = [10, constants.addSimbol, 5];
var res2 = calImport.calculateMathOperation(calcExample);

if(res2 == 15 )
    console.log("Pass test 1 of calculateMathOperation res: " + res2 );
else
    console.log("Did not pass test 1 of calculateMathOperation res: " + res2);


 

var calcExample = [constants.beginSeparator, 10, constants.addSimbol, 5 , constants.endSeparator, constants.multiplySimbol, 2];
var res3 = calImport.calculateMathOperation(calcExample);

if(res3 == 30 )
    console.log("Pass test 2 of calculateMathOperation res: " + res3 );
else
    console.log("Did not pass test 2 of calculateMathOperation res: " + res3);