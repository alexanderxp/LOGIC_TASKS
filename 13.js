/*

3. Написать функцию-обертку, 
замеряющую и выводящую в консоль время выполнения синхронной функции, 
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


function subtractingDates() {
  let before = new Date();                                                  
  for (let i = 0; i < 100000; i++) {  // цикл просто для разделения времени              
  let doSomething = i * i * i;          
  }
  let after = Date.now();                                                 
  console.log(after - before);
}

wrapper1(subtractingDates);