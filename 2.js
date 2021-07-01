/*
2. Написать функцию, которая принимает массив числовых значений 
и возвращает среднее значение
*/

"use strict"

let arr = [10, 2, 3, 15, 46, 98];
// let arr = [1, 2, 3, 4, 5, 6, 7];

function averageNum(array) {
    return array.reduce((a, b) => (a + b)) / array.length;
}

alert(averageNum(arr));