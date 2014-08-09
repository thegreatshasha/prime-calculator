//Make a node.js project in coffeescript with export and stuff
var printer = require("./printer")

var sieve = {}

// The theoretical bound on number of integers necessary to generate n primes
sieve.upperBound = function(num) {
	return parseInt(num*(Math.log(num)+Math.log(Math.log(num))));
}

sieve.composites = {}

sieve.currentPrime = 1

sieve.primes = [2]

sieve.calculate = function() {
	var max = sieve.upperBound(1000)
	var count = 1;
	
	while(count<1000) {
		sieve.currentPrime += 2;
	
		if(!sieve.composites[sieve.currentPrime]){
			count += 1;
			sieve.primes.push(sieve.currentPrime)
		
			for(var i = sieve.currentPrime; i<= max; i += 2*sieve.currentPrime) {
				sieve.composites[i] = true
			}
		}
		
		
	}
	
	printer.print(sieve.primes)
	
}

sieve.calculate()