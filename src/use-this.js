'use strict';

const obj = {
    a: 34,
    name: 'Joe',
    printNameArrow: () => {
        console.log(this);
        console.log(this.name);
    },
    printName: function () {
        console.log(this);
        console.log(this.name);
    }
}

const f1 = obj.printNameArrow.bind(obj);
const f2 = obj.printNameArrow;

f1();
f2();
f2.call(obj, []);
f2.apply(obj);
// undefined
obj.printName();
// Joe