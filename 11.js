/*

1. Преобразовать наследование в функциональном стиле на классы ES6

function User(name, age) {
 this.name = name;
 this.age = age;
 this.printName = function() {
   console.log(this.name);
 }
}
function Admin(name, age, role) {
 User.call(this, name, age);
 this.role = role;
 this.printRole = function() {
   console.log(this.role);
 }
}

*/

// ------------ Решение -------------------
"use strict"

class User {
  constructor(name, age) {
  this.name = name;
  this.age = age;
  }

  printName() {
    console.log(this.name);
  }
}

class Admin extends User {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }

  printRole() {
    console.log(this.role);
  }
}

let adm1 = new Admin('Blablabla',123,'user1');

alert(JSON.stringify(adm1, null, 2));

