/*
2. Написать функцию, которая принимает числовое значение, 
и выводит результат сложения всех вхождений в последовательности. 
Использовать рекурсию. 
Например передаем 2, функция возвращает 1+2. 
Передаем 4, функция возвращает 1+2+3+4 ит.д.
*/

" use strict "

let numFive = 5;

function addNumsAll(num){

  if(!Number(num)){
    return null;
  }

  if(num == 0 )
    return 0;
    return num + addNumsAll(num-1);
}
alert(addNumsAll(numFive));