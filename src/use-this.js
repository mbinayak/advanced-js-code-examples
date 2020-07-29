'use strict';

const obj = {
    a: 34,
    name: 'Joe',
    printNameArrow: () => {
        console.log(arguments);
        console.log(this);
        console.log(this.name);
    },
    printName: function () {
        console.log(arguments);
        console.log(this);
        console.log(this.name);
    }
}

const f1 = obj.printNameArrow.bind(obj); // arrow funcitons only bind this to lexical order
const f2 = obj.printNameArrow;

f1();
f2();
f2.call(obj, []); // arrow funcitons only bind this to lexical order
f2.apply(obj); // arrow funcitons only bind this to lexical order
// undefined
obj.printName();
// Joe