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

let obj01 = {
  propA: "valueA1",
  propB: "valueB1"
};

let obj02 = Object.create(obj01);

obj02.propC = "valueC2";
obj02.propB = "valueB2";

console.log(obj01, obj02);
// { propA: 'valueA1', propB: 'valueB1' } { propC: 'valueC2', propB: 'valueB2' }
console.log(obj01.propB, obj02.propB);
// valueB1 valueB2
console.log(obj01.propA, obj02.propA);
// valueA1 valueA1

console.log('******************************');

/*
  class experiments
*/

class C1 {
  constructor() {
    this.prop1 = 'A1';
    this.prop2 = 'A2';
  }
}

class C2 {
  constructor() {
    this.prop1 = 'B1';
    this.prop2 = 'B2';
  }
}

class C3 extends C1 {
  printProps() {
    console.log(`${this.prop1} , ${this.prop2}`);
  }
}
class C4 extends C2 {
  printProps() {
    console.log(`${this.prop1} , ${this.prop2}`);
  }
}

let o1 = new C3();
let o2 = new C4();
o1.printProps();
o2.printProps();

console.log(typeof C1, typeof C2);
// function function
console.log(C1.prototype, C2.prototype);
// C1 {} C2 {}
console.log(o1.__proto__, o2.__proto__);
// C3 {} C4 {}
console.log(o1.__proto__.__proto__, o2.__proto__.__proto__);
// C1 {} C2 {}

console.log('******************************');

/*
  ... operator experiments
*/

let arr = [1, 2, 3];
let arr2 = ['a1', 'a2', 'a3', 'a4', 'a5'];
let arr3 = ['b1', 'b2', 'b3'];
let obj001 = {
  ar1: 1234567
};

console.log({ ...arr });
// { '0': 1, '1': 2, '2': 3 }
console.log({ ...arr2 });
// { '0': 'a1', '1': 'a2', '2': 'a3', '3': 'a4', '4': 'a5' }
console.log({ ...arr3 });
// { '0': 'b1', '1': 'b2', '2': 'b3' }
console.log({ ...obj001 });
// { ar1: 1234567 }

console.log({ ...obj001, ...arr });
// { '0': 1, '1': 2, '2': 3, ar1: 1234567 }
console.log({ ...obj001, ...arr, ...arr2});
// { '0': 'a1', '1': 'a2', '2': 'a3', '3': 'a4', '4': 'a5', ar1: 1234567 }
console.log({ ...obj001, ...arr2, ...arr3});
// { '0': 'b1', '1': 'b2', '2': 'b3', '3': 'a4', '4': 'a5', ar1: 1234567 }

console.log([ ...arr, ...arr3, ...arr2]);
// [
//    1, 2, 3, 'b1',
//   'b2', 'b3', 'a1', 'a2',
//   'a3', 'a4', 'a5'
// ]

console.log('******************************');