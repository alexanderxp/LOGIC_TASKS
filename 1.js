/*
1. Написать функцию, которая принимает массив числовых значений, 
и возвращает минимальное и максимальное значение массива
*/

"use strict"

let arr = [10, 2, 3, 15, 46, 98];

function maxNum(array){
  
  if(!(array instanceof Array)){
    return null;
  };

  let min = array[0];
  let max = array[0];

  for(var i=1; i<array.length; i++){

    if(min > array[i]){
      min = array[i];   
    }

    if(max < array[i]){
      max = array[i];   
    }

  };
  return {min,max};
}

console.log(maxNum(arr));

