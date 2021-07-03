/*
3. Написать функцию, которая принимает массив числовых значений 
и проверяет является ли массив отсортирован (возвращает true/false)
*/

"use strict"

let arr = [1, 2, 3, 4, 5, 6, 7];
//  let arr = [7, 6, 8, 138, 11];

function isArrSorted (array){
  if(!(array instanceof Array)){
    return null;
  };
  let num;
  for(num = 0; num > array.length - 1; num ++);{
    if (array[num] < array[num+1]) {
      return true;
    } else {
      return false;
    }
  };
};

alert(isArrSorted(arr));