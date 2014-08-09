module.exports = function() {
	
	this.rules = {
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
		20: "twenty",
		30: "thirty",
		40: "forty",
		50: "fifty",
		60: "sixty",
		70: "seventy",
		80: "eighty",
		90: "ninety"
	}

	this.facevalues = {
		9: "billion",
		6: "million",
		3: "thousand",
		2: "hundred"
	}

	this.getRule = function(num) {
		var key = parseInt(num)
		return this.rules[key]
	}

	this.getFaceValue = function(facenum) {
		var key = parseInt(facenum)
		return this.facevalues[key]
	}

	this.log = function(text) {
		if(text)
			process.stdout.write(text + " ")
	}

	this.printThreeDigitNumber = function(numArray, faceValue) {
		
		var units = numArray[numArray.length - 1]
		var tenth = numArray[numArray.length - 2]
		var lastTwo = numArray[numArray.length - 2] + numArray[numArray.length - 1];
	
		for( var i = 0; i<numArray.length-2; i++) {
			var digit = numArray[i]
			if(this.getRule(digit))
				this.log(this.getRule(digit) + " " + this.getFaceValue(numArray.length - 1 - i))
		}
	
		if((parseInt(tenth) || parseInt(units)) && numArray.length > 2 && faceValue == 0)
			this.log("and")
		
		if(this.getRule(lastTwo)) {
			this.log(this.getRule(lastTwo))
		}
	
		else{
			if(tenth) {
				var tensDigit = parseInt(tenth)
				this.log(this.getRule(tensDigit*10))
			}
			if(units) {
				this.log(this.getRule(units))
			}
		}
		
		// Finally if facevalue passed as argument
		if(faceValue && parseInt(numArray.join("")))
			this.log(this.getFaceValue(faceValue)+",")
	}

	this.print = function(num) {
		
		var numArray = num.toString().split("")
		var start = 0
		var numlen = (numArray.length % 3) || 3
		
		if(numArray.length == 1)
			this.log(this.getRule(numArray[0]))
	
		while(start < numArray.length - 1) {
		
			var end = start + numlen
			var three_digits = numArray.slice(start, start + numlen)
			var faceValue = numArray.length - end
			this.printThreeDigitNumber(three_digits, faceValue)
		
			start += numlen
			numlen = 3
		}
		//this.printThreeDigitNumber(123)
	}
}
