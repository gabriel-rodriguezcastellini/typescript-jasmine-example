"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("./Calculator");
const calculator = new Calculator_1.Calculator();
console.log(`2 + 3 = ${calculator.add(2, 3)}`);
console.log(`5 - 3 = ${calculator.subtract(5, 3)}`);
console.log(`4 * 3 = ${calculator.multiply(4, 3)}`);
console.log(`10 / 2 = ${calculator.divide(10, 2)}`);
