let Clases = require('../models/clases.js');
let symbol = Clases.symbol;
let SymbolOperator = Clases.SymbolOperator;

const beginSeparator = new symbol('(', 2);
const endSeparator = new symbol(')', 2);
const addSimbol = new SymbolOperator('+', 1, (a,b) => a+b);
const substractSimbol = new SymbolOperator('-', 1, (a,b) => a-b);
const multiplySimbol = new SymbolOperator('*', 2, (a,b) => a*b);
const divideSimbol = new SymbolOperator("/", 2, (a,b) => a/b);
const exponentialSimbol = new SymbolOperator("^", 2, (a,b) =>{ if(b==0) return 1; var res = a; for(var i= 0; i<(b-1);i++){ res=res*a; } return res; } );

module.exports.beginSeparator =beginSeparator;
module.exports.endSeparator = endSeparator;
module.exports.addSimbol = addSimbol;
module.exports.substractSimbol = substractSimbol;
module.exports.multiplySimbol = multiplySimbol; 
module.exports.divideSimbol = divideSimbol;
module.exports.exponentialSimbol = exponentialSimbol;
