'use strict';

function checkPrime(number) {
  if (number > 1000) return "Данные неверны";
  if (number === 0 || number === 1) return "Число " + number + " принадлежит к классу нейтральных чисел";
  for (let i = 2; i < number; i++) {
    if (!(number % i)) return "Число " + number + " - составное число";
  }
  return "Число " + number + " - простое число";
};

module.exports = checkPrime;