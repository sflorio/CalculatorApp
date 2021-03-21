
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


module.exports = {
    symbol : symbol,
    SymbolOperator : SymbolOperator,
    Operation : Operation
}