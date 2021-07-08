/*
4.  Задача на замыкания. Реализовать функцию, 
которая будет при каждом вызове и передаче строкового значения 
конкатенировать строку используя скоуп замыкания, 
а после вызова ее без параметров выдать результат. Например 
concat('test string 1');
concat('test2');
concat('finish');
console.log(concat());

» 'test string 1test2finish'
*/

" use strict "

function concatString(){
  let strIn = "";

  return function(piece){

    if(arguments.length == 0 ){
      return strIn;
    }

    strIn = strIn + "   " + piece;
  };

};
let makeConcat = concatString();

makeConcat('test string 1');
makeConcat('test2');
makeConcat('finish');

console.log(makeConcat());