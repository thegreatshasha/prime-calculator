var numToWordsPrinter = require('./printer')
var primeCalculator = require('./prime')

var pp = new numToWordsPrinter()
var primec = new primeCalculator()

var primes = primec.calculate(1000)
console.log(primes)