module.exports = function(){
	
	// The theoretical bound on number of integers necessary to generate n primes
	this.upperBound = function(num) {
		return parseInt(num*(Math.log(num)+Math.log(Math.log(num))));
	}

	this.composites = {}

	this.currentPrime = 1

	this.primes = [2]

	this.calculate = function(numOfPrimes) {
		var max = this.upperBound(numOfPrimes)
		var count = 1;
	
		while(count<1000) {
			this.currentPrime += 2;
	
			if(!this.composites[this.currentPrime]){
				count += 1;
				this.primes.push(this.currentPrime)
		
				for(var i = this.currentPrime; i<= max; i += 2*this.currentPrime) {
					this.composites[i] = true
				}
			}
		
		
		}
	
		return this.primes
	
	}
}