const Calculator = (function Calculator() {
    let result = 0;
    function add(num) {
      if (num) {
        result += num;
      }
      return;
    }
  
    function subtract(num) {
      if (num) {
        result -= num;
      }
      return;
    }
  
    function divide(num) {
      if (num) {
        result /= num;
      }
      return;
    }
  
    function multiply(num) {
      if (num) {
        result *= num;
      }
      return;
    }
  
    function getResult() {
      return;
    }
  
    function reset() {
      result = 0;
      return;
    }
  
    return {
      add,
      subtract,
      divide,
      multiply,
      getResult,
      reset
    }
  });
  
  module.exports = Calculator;
  