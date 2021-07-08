/*
3.  Написать функцию, которая принимает строку, 
а на выходе возвращает ее зеркальное отображение. 
Не использовать встроенные методы в JS, 
разрешается только языковые конструкции (for, while и т.д.).
*/

" use strict "

let lala = "lala";

function strReverseBack(str){

  if(!String(str) ){
    return NaN;
  }

  let strBack = ' ';
  for(let i=0; i< str.length ; i++ ) {
    strBack += str[ (str.length - 1 ) - i ];
  }
  return strBack;
}
alert(strReverseBack(lala));