/*
1. Написать функцию вычисления факториала. 
Передаваемый параметр в функцию - число, факториал которого нужно посчитать. 
Возвращаемое значение - результат. Выполнить используя рекурсию.
*/

" use strict "

let numFive = 5;

function calcFactorial(n) {

  if(!Number(n)){
    return null;
  }

  return ( n != 1 ) ? (n * calcFactorial(n-1)) : 1;
}
alert(calcFactorial(numFive));