'use strict';
/**
 * Iterators in simple terms is a thing we can loop on.
 * 
 * In javascript,
 * * We can loop over
 * * - We can loop on arrays
 * * - We can loop in keys on object ( for..in)
 * * - We can loop over Maps
 * * - We can loop over sets
 * * - We can loop over generators
 * 
 * * We can loop with,
 * * - while, do..while
 * * - for
 * * - for..in (only objects)
 * * - for..of (Array, map, iterables)
 * * - ... operator
 * 
 * 
 */

//  Object.defineProperty

let i = 0;
const iterableObj = {
    next: function () {
        while (i < 3) {
            i++;
            return {
                value: i,
                done: false
            };
        }
        return {
            value: i,
            done: true
        };
        
    },
    [Symbol.iterator]: function () { return this; }
};

const createIteviaIteraterProtocol = function () {
    let i = 0;

    return {
        next: function () {
            while (i < 3) {
                i++;
                return {
                    value: i,
                    done: false
                };
            }

            return {
                value: i,
                done: true
            };
        },
        [Symbol.iterator]: function () { return this; }
    };
};

const iteratorGenerator = function* () {
    let i = 0;

    while (i <= 3) {
        i++;
        yield i;
    }
};


it2 = createIteviaIteraterProtocol();
it3 = iteratorGenerator();

console.log(iterableObj, iterableObj[Symbol.iterator]);
console.log(it2, it2[Symbol.iterator]);
console.log(it3, it3[Symbol.iterator]);

for (let j of iterableObj) {
    console.log(`Iterator 1: ${j}`);
}
for (let j of it2) {
    console.log(`Iterator 2: ${j}`);
}
for (let j of it3) {
    console.log(`Iterator 3: ${j}`);
}