let calImport = require("../calculator.js");
let constants = require("../models/constants.js");

/*
console.log("Test 2: 3*6+1+2")
var testString = "3*6+1+2"
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);


console.log("Test: (10+5)*2")
var testString = "(10+5)*2"
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);
*/

var testString = "1+2+3+4+5+6+7+8+9+10";
console.log("Test: " + testString);
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);


var testString = "1*2+3^4-5*6+7/8+9/10";
console.log("Test: " + testString);
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);

var testString = "1*(2+3^4)-5*(6+7)/(8+9/10)"
console.log("Test: " + testString);
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);


var testString = "1*(2+3^4)-5*((6+7)/(8+9/10))";
console.log("Test: " + testString);
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);

/*
console.log("Test: 1*(2+3*4)-5")
var testString = "1*(2+3*4)-5"
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);


console.log("Test:(6+7)/(8+9/10)")
var testString = "(6+7)/(8+9/10)"
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);

console.log("Test:(8+9/10)")
var testString = "(8+9/10)"
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);


console.log("Test:((6+7)/(8+9/10))")
var testString = "((6+7)/(8+9/10))"
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);


console.log("Test: 1*(2+3*4)-5*((6+7)/(8+9/10))")
var testString = "1*(2+3*4)-5*((6+7)/(8+9/10))"
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);


console.log("Test: 2^3")
var testString = "2^3"
var testToken = calImport.tokenizar(testString);
var operation = calImport.tokenizarOperaciones(testToken);
var res = calImport.calculateMathOperation(operation);
console.log("Resultado: " + res);*/