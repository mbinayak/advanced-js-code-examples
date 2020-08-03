const err1 = new Error('custom error');

console.log(`this will run even after error object created ${err1} ${err1.message}`);