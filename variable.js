// three way of defining the variables : var, let and const

// var x = 5.6; // belongs global scope

// function testScope() {
//   var x = 10; // belongs function scope

//   console.log(x);
// }

// console.log(x);

// if (10 == 10) {
//   var x = "inside block"; // belongs global scope
// }

// testScope();
// console.log(x);

// conclusion var is a function scope, not belongs block scope.

// * Example for let

// let x = 5.6; // belongs global scope

// function testScope() {
//   let x = 10; // belongs function scope

//   console.log(x);
// }

// console.log(x);

// if (10 == 10) {
//   let x = "inside block"; // belongs block scope
// }

// testScope();
//  console.log(x);

// conclusion let is a block scope,

// * Example for const

const x = 5.6; // belongs global scope

function testScope() {
  const x = 10; // belongs function scope

  console.log(x);
}

console.log(x);

if (10 == 10) {
  const x = "inside block"; // belongs block scope
}

//const x = 50; //never assigned

testScope();
console.log(x);

// conclusion const is a block scope, never reasign but can change the element of array and object;
