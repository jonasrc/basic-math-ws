const basicMathOps = require('basic-math-ops/math');
const InvalidOperationError = require('../errors/InvalidOperationError');
const mathFunctions = {
    '+': basicMathOps.sum,
    '-': basicMathOps.subtract,
    '*': basicMathOps.multiply,
    '/': basicMathOps.divide
}

const isValid = (numOne, numTwo, operation) =>
    !isNaN(numOne) && !isNaN(numTwo) && mathFunctions.hasOwnProperty(operation);

exports.processOperation = (numOne, numTwo, operation) => {
    if(!isValid(numOne, numTwo, operation)) {
        throw new InvalidOperationError.InvalidOperationError();
    }
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);
    const operationFunc = mathFunctions[operation];
    return operationFunc(numOne, numTwo);
}