console.log("Probando Node Js, el hola mundo esta pasado de moda");
console.log("Calculadora node.js");
let input = "(4+63)*3";

class symbol {
    constructor(_symbol, _level){
        this.symbol= _symbol;
        this.level= _level;
    }

}

class SymbolOperator extends symbol{
    constructor(_symbol, _level, _operation){
        super(_symbol, _level);
        this._operation = _operation;
    }
}

class Operation {
    constructor(_a,_b, _operator){
        this.a = _a;
        this.b = _b;
        this.operator = _operator;
        this.res = null;
    }

    MakeOperation() {
        this.res = this.operator._operation(this.a, this.b);
    }

    getResult(){
        if (this.res == null ){
            return "Operation have not been made."
        }

        return this.res;
    }



}

const  beginSeparator = new symbol('(', 3);

const endSeparator = new symbol(')', 3);

const addSimbol = new SymbolOperator('+', 1, (a,b) => a+b);

const substractSimbol = new SymbolOperator('-', 1, (a,b) => a-b);

const multiplySimbol = new SymbolOperator('*', 2, (a,b) => a*b);

const divideSimbol = new SymbolOperator("/", 2, (a,b) => a/b);


const symbolMatcher = (character) => {
    if( character === beginSeparator.symbol )
        return beginSeparator;

    if( character === endSeparator.symbol )
        return endSeparator;

    if( character === addSimbol.symbol )
        return addSimbol;

    if( character === substractSimbol.symbol )
        return substractSimbol;

    if( character === multiplySimbol.symbol )
        return multiplySimbol;

    if( character === divideSimbol.symbol )
        return divideSimbol;

    if( character === isNaN)
        return null;

    return parseFloat(character);

};


let tokens = [];


tokenizar = (inpt) => {
    let tokensProcesados = [];
    let res = 0;
    if( validateInputStringLexer(input)){
        tokensProcesados = separateInputInTokens(inpt);
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
            if(element === beginSeparator){
                isSubterm =true;
                return; 
            }

            if(element === endSeparator){
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



separateInputInTokens = (inpt) => {
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
/*
var res = separateInputInTokens(input);
console.log("Processed " + res.lenght + " termns" );
res.forEach(e => console.log(e));

*/
/*
var calcExample = [10, addSimbol, 5];
var res2 = calculateMathOperation(calcExample);

if(res2 == 15 )
    console.log("Pass test 1 of calculateMathOperation res: " + res2 );
else
    console.log("Did not pass test 1 of calculateMathOperation res: " + res2);
*/

 

var calcExample = [beginSeparator, 10, addSimbol, 5 , endSeparator, multiplySimbol, 2];
var res3 = calculateMathOperation(calcExample);

if(res3 == 30 )
    console.log("Pass test 2 of calculateMathOperation res: " + res3 );
else
    console.log("Did not pass test 2 of calculateMathOperation res: " + res3);
