const lodashClonedeep = require("lodash.clonedeep");
//const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

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
    
    if( character === constants.exponentialSimbol.symbol )
        return constants.exponentialSimbol;
        
    if( character === isNaN)
        return null;

    return parseFloat(character);

};

var calcApp = (inpt) => {
    if(!validateInputStringLexer(input)){
        throw "Tokens no válido";
    }

    let tokensProcesados = tokenizar(inpt);
    
    let operacionesTokenizadas  = tokenizarOperaciones(tokensProcesados);
    
    return calculateMathOperation(operacionesTokenizadas);;

};

var validateInputStringLexer = (input) => {
    return valdiateLexer(input) && valdiateSemantic(input);
}

var valdiateLexer = (input) => {
    


    return true;
}

var valdiateSemantic = (input) =>{
    return true;
}

var getHigestLevel = (inptTokens)=>{
    let arrtokens = lodashClonedeep(inptTokens);
    if(arrtokens == null)
        return;

    if(arrtokens.length == 0)
        return 3;

    //get only the symbols
    var listOfSymbols = arrtokens.filter(e => e instanceof symbol);
    // set its virtual level
    if(listOfSymbols.length == 0)
        return 2;

    if(!Array.isArray(listOfSymbols)){

        if(listOfSymbols instanceof SymbolOperator)
            return listOfSymbols.level;

        return 2;
    }
        
    
    var virtualMultiply = 1;
    listOfSymbols.forEach(element =>{        
        if( element.symbol === constants.beginSeparator.symbol )
            virtualMultiply = virtualMultiply + 1;

        if(element.symbol === constants.endSeparator.symbol)
            virtualMultiply = virtualMultiply - 1;

        if( element instanceof SymbolOperator )
            element.level = element.level * virtualMultiply;
    });

    listOfSymbols = listOfSymbols.filter(e => e instanceof SymbolOperator);

    if(listOfSymbols == null)
        return;

    if(listOfSymbols.length == 0)
        return;

    var higestLevel = listOfSymbols[0].level;
    listOfSymbols.forEach(element => {
            if( element.level < higestLevel ) 
                higestLevel = element.level    
    })

    return higestLevel;


};

var tokenizarOperaciones = (tokens) =>{
    
    var previousLevel = getHigestLevel(tokens);

    var newArray= [];
    var operation = new Operation();

    
    var length = tokens.length;

    // si el termino esta rodeado de parentesis los elimino
    if(length > 1){
        var primerElemento = 0;
        var ultimoElemento = tokens.length-1;
        var cantBeginSeparator = tokens.filter((e)=> e === constants.beginSeparator ).length;
        var cantEndSeparator = tokens.filter((e)=> e === constants.endSeparator ).length;
        if( cantBeginSeparator == 1 && cantEndSeparator== 1 && tokens[primerElemento] === constants.beginSeparator && tokens[ultimoElemento] === constants.endSeparator ){
            tokens.shift();
            tokens.pop();
            length = tokens.length;
        }
    }
    

    if( length == 3){
        operation.a = tokens[0];
        operation.operator = tokens[1];
        operation.b = tokens[2];
        return operation;
    }

    var subTermn = false;
    
    for(var indexOfElement= 0; indexOfElement<length; indexOfElement++){
        var element = tokens[indexOfElement];

        if( element instanceof symbol){
            if( element === constants.beginSeparator){
                subTermn = true;
                continue;
            }
                
            if( element === constants.endSeparator){
                subTermn = false;
                continue;
            }
        }

        if( !subTermn && element instanceof SymbolOperator ){
            if( element.level <= previousLevel ){
                operation.a = (newArray.length > 1 ? tokenizarOperaciones(newArray) : newArray[0]);
                operation.operator = element;

                var resto = tokens.slice(indexOfElement + 1);

                operation.b =  (resto.length > 1 ? tokenizarOperaciones(resto) : resto[0]);
                break;
            }
        }

        newArray.push(element);
    }

    if( operation.a == undefined && operation.b == undefined && operation.operator == undefined){
        operation = tokenizarOperaciones(newArray)
    }

    return operation;
};


var calculateMathOperation = (operation) => {
    if(!( operation instanceof Operation)){
        return operation;
    }

    operation.a = calculateMathOperation(operation.a);
    operation.b = calculateMathOperation(operation.b);

    //var operation = new Operation(calculateMathOperation2(a),calculateMathOperation2(b),operator);
    operation.MakeOperation();
    var resultado = operation.getResult();

    return resultado;
};


var tokenizar = (inpt) => {
    //initialize local variables
    var tokens = [];
    var number ="";
    var pushNumberInTerms = () =>{
        if(number != ""){
            tokens.push(parseInt(number));
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
module.exports.tokenizarOperaciones = tokenizarOperaciones;
