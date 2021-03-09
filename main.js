console.log('hi');
var mass= [1, 10, 30, 25, 60, 33, 67, 34, 22, 37, 94];
var number = -8;

var modules = require('./node_modules/math');

console.log(modules.min(mass));
console.log(modules.sum(mass));
console.log(modules.mod(number));