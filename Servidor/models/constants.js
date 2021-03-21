let Clases = require('../models/clases.js');
let symbol = Clases.symbol;
let SymbolOperator = Clases.SymbolOperator;

const beginSeparator = new symbol('(', 3);
const endSeparator = new symbol(')', 3);
const addSimbol = new SymbolOperator('+', 1, (a,b) => a+b);
const substractSimbol = new SymbolOperator('-', 1, (a,b) => a-b);
const multiplySimbol = new SymbolOperator('*', 2, (a,b) => a*b);
const divideSimbol = new SymbolOperator("/", 2, (a,b) => a/b);

module.exports.beginSeparator =beginSeparator;
module.exports.endSeparator = endSeparator;
module.exports.addSimbol = addSimbol;
module.exports.substractSimbol = substractSimbol;
module.exports.multiplySimbol = multiplySimbol; 
module.exports.divideSimbol = divideSimbol;