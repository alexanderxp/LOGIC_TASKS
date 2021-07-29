/*

2. Переписать функцию f используя async/await

function wait() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(1), 1000);
    })
}

function f() {
    wait().then((data) => {
        console.log(data);
    }).catch((e) => {
        console.log(e);
    }).finally(() => {
        console.log('Promise complete');
    });
}

*/

// ------------ Решение -------------------
"use strict"

function wait() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  })
}

async function f() {
  try {
    const data = await wait();
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log('Promise complete');
  }
}

f();    //  1     ( Promise complete )

