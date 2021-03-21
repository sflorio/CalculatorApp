let Clases = require('./models/clases.js');
let symbol = Clases.symbol;
let SymbolOperator = Clases.SymbolOperator;
let Operation = Clases.Operation;
let constants = require("./models/constants.js");

const symbolMatcher = (character) => {
    if( character === constants.beginSeparator.symbol )
        return constants.beginSeparator;

    if( character === constants.endSeparator.symbol )
        return constants.endSeparator;

    if( character === constants.addSimbol.symbol )
        return constants.addSimbol;

    if( character === constants.substractSimbol.symbol )
        return constants.substractSimbol;

    if( character === constants.multiplySimbol.symbol )
        return constants.multiplySimbol;

    if( character === constants.divideSimbol.symbol )
        return constants.divideSimbol;

    if( character === isNaN)
        return null;

    return parseFloat(character);

};

var calcApp = (inpt) => {
    let tokensProcesados = [];
    let res = 0;
    if( validateInputStringLexer(input)){
        tokensProcesados = tokenizar(inpt);
    }
    
    if( tokensProcesados.lenght > 0){
        res = calculateMathOperation(tokensProcesados);
    }
    
    return tokensProcesados;

};

var validateInputStringLexer = (input) => {
    return true;
}

var calculateMathOperation = (tokens) => {
    var a = [];
    var b = [];
    var operator;

    var subterm = [];
    var isSubterm = false;
    tokens.forEach((element) => {
        
        if(element instanceof symbol ){
            if(element === constants.beginSeparator){
                isSubterm =true;
                return; 
            }

            if(element === constants.endSeparator){
                isSubterm =false;

                 if(a.length == 0 ){
                     a = calculateMathOperation(subterm);
                     subterm = [];
                     return;
                 }

                 if(b.length == 0 ){
                     b = calculateMathOperation(subterm);
                     subterm = [];
                     return;
                 }

                return;
            }

            if(element instanceof SymbolOperator){
                if( isSubterm)
                    subterm.push(element);
                else
                    operator = element;

                return;
            }
        }


        if(typeof element === 'number'){
            if(isSubterm){
                subterm.push(element);
                return;
            }
                
            if(a.length == 0 ){
                a = element;
                return;
            }

            if(b.length == 0 ){
                b = element;
                return;
            }
        }


    });
    
    var operation = new Operation(a,b,operator);
    operation.MakeOperation();

    return operation.getResult();

};



var tokenizar = (inpt) => {
    //initialize local variables
    var tokens = [];
    var number ="";
    var pushNumberInTerms = () =>{
        if(number != ""){
            tokens.push(number);
            number ="";
        }
    };

    //loop for each char in string
    [...inpt].forEach(element => {
        var a = symbolMatcher(element);
        
        if( a instanceof symbol){
            pushNumberInTerms();
            tokens.push(a);
        }
        else {
            number +=element;
        }
    });

    pushNumberInTerms();

    return tokens;
}

module.exports.symbolMatcher = symbolMatcher;
module.exports.calcApp = calcApp;
module.exports.validateInputStringLexer = validateInputStringLexer;
module.exports.calculateMathOperation = calculateMathOperation;
module.exports.tokenizar = tokenizar;