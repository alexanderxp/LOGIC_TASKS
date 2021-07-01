/*
1. Написать функцию, которая принимает массив числовых значений, 
и возвращает минимальное и максимальное значение массива
*/

"use strict"

let arr = [10, 2, 3, 15, 46, 98];

function maxNum(arr){
 let max = arr[0];
 for(var i=1; i<arr.length; i++){
   if(arr[i] > max){
     max = arr[i];   
   }
  }
return max;
}

alert(maxNum(arr)); 

/*
Решение 2 :

"use strict"

let arr = [10, 2, 3, 15, 46, 98];

let maxNum = Math.max.apply(null, arr);

alert(maxNum); 

*/

