'use strict';

const Calculator = {
    currentState: 0,
    add(n = 0){   
        Calculator.currentState += n;
        return Calculator.add;
    },
    subtract(n = 0) {
        Calculator.currentState -= n;
        return Calculator.subtract;
    },
    divide(n = 1) {
        Calculator.currentState /= n;
        return Calculator.divide;
    },
    multiply(n = 1) {
        Calculator.currentState *= n;
        return Calculator.multiply;
    },   
    getResult() {
        return Calculator.currentState;
    },
    reset() {
        Calculator.currentState = 0;
        return Calculator.currentState;
    }  
};

module.exports = Calculator;