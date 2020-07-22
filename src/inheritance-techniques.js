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

console.log(obj1, obj2); // { propA: 'valueA1', propB: 'valueB1' } { propA: 'valueA2', propC: 'valueC2', propB: 'something  else' }
console.log(obj1.propB, obj2.propB); //  valueB1 something-else
console.log(obj1.propA, obj2.propA); // valueA1 valueA2
console.log(obj1.propC, obj2.propC); // undefined valueC2
