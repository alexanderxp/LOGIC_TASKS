/*

4. Написать функцию-обертку, 
замеряющую и выводящую в консоль время выполнения асинхронной функции, 
переданной в функцию-обертку в качестве коллбека. 
Для замера можно использовать performance.now(); .

*/

// ------------ Решение -------------------
"use strict"

function wrapper1(func1) {
   let times0 = performance.now();
   func1();
   let times1 = performance.now();
   alert("Время выполнения " + (times1 - times0) + " миллисекунд.")
}

async function doSomethingAsync(){
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("I did something"), 3000);
  });
  let result = await promise;                                             
  console.log(result);                                                                    
}

wrapper1(doSomethingAsync);

