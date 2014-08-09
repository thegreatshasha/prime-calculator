var numToWordsPrinter = require('./printer')
var primeCalculator = require('./prime')

var pp = new numToWordsPrinter()
var primec = new primeCalculator()

var numOfPrimes = process.argv.slice(2)[0];

var primes = primec.calculate(numOfPrimes)

for(var i=0; i<primes.length; i++){
	pp.print(primes[i])
	console.log("")
}