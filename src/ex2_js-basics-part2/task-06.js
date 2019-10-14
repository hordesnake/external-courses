'use strict';

function checkPrime(number) {
  let result;
  if (number > 1 && number < 1000) {
    result = `Число ${number} - простое число`;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        result = `Число ${number} - составное число`;
      }
    }
  } else {
    result = 'Данные неверны';
  }
  return result;
}

module.exports = checkPrime;