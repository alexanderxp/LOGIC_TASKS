/*
3. Написать функцию, которая принимает массив числовых значений 
и проверяет является ли массив отсортирован (возвращает true/false)
*/

"use strict"

let arr = [1, 2, 3, 4, 5, 6, 7];
//  let arr = [7, 6, 8, 138, 11];

let isArrSorted = arr => arr.every((value,item,array) => !item || array[item-1] <= value);

alert(isArrSorted(arr));