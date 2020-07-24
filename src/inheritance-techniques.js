/*
  __proto__ experiments
*/

let obj1 = {
    propA: "valueA1",
    propB: "valueB1"
};

let obj2 = {
    propA: "valueA2",
    propC: "valueC2"
};

obj2.__proto__ = obj1;

obj2.propB = "something-else";

console.log(obj1, obj2);
// { propA: 'valueA1', propB: 'valueB1' } { propA: 'valueA2', propC: 'valueC2', propB: 'something  else' }
console.log(obj1.propB, obj2.propB);
//  valueB1 something-else
console.log(obj1.propA, obj2.propA);
// valueA1 valueA2
console.log(obj1.propC, obj2.propC);
// undefined valueC2

console.log('******************************');

/*
  constructor experiments
*/

obj = {
  printName: () => {
    console.log(`Name: ${this.name} Gender: ${this.gender}`);
  }
};

function A(name) {
    this.person = name;
}

A.prototype = obj;
function B(name, gender) {
    this.person = name;
    this.gender = gender;
}

aPerson = new A('Bret');
bPerson = new B('Gia', 'female');

console.log(aPerson, bPerson);
// A { person: 'Bret' } B { person: 'Gia', gender: 'female' }
console.log(aPerson.constructor, bPerson.constructor);
// [Function: Object] [Function: B]
A.prototype.constructor = A;
console.log(aPerson.constructor, bPerson.constructor);
// [Function: A] [Function: B]
console.log(aPerson.__proto__, bPerson.__proto__);
// A { printName: [Function: printName], constructor: [Function: A] } B { }

console.log('******************************');

/*
  Object.create experiments
*/