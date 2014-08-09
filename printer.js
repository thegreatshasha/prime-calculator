var printer = {}

printer.rules = {
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
	19: "ninetenn",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety"
}

printer.facevalues = {
	9: "billion",
	6: "million",
	3: "thousand",
	2: "hundred"
}

printer.getRule = function(num) {
	var key = parseInt(num)
	return this.rules[key]
}

printer.getFaceValue = function(facenum) {
	var key = parseInt(facenum)
	return this.facevalues[key]
}

printer.log = function(text) {
	if(text)
		console.log(text)
}

printer.printThreeDigitNumber = function(numArray, faceValue) {
	var units = numArray[numArray.length - 1]
	var tenth = numArray[numArray.length - 2]
	var lastTwo = numArray[numArray.length - 2] + numArray[numArray.length - 1];
	
	for( var i = 0; i<numArray.length-2; i++) {
		var digit = numArray[i]
		if(printer.getRule(digit))
			printer.log(printer.getRule(digit) + " " + printer.getFaceValue(numArray.length - 1 - i))
	}
	
	if((parseInt(tenth) || parseInt(units)) && numArray.length > 2 && faceValue == 0)
		printer.log("and")
		
	if(printer.getRule(lastTwo)) {
		printer.log(printer.getRule(lastTwo))
	}
	
	else{
		if(tenth) {
			var tensDigit = parseInt(tenth)
			printer.log(printer.getRule(tensDigit*10))
		}
		if(units) {
			printer.log(printer.getRule(units))
		}
	}
	
	// Finally if facevalue passed as argument
	if(faceValue)
		console.log(printer.getFaceValue(faceValue))
}

printer.print = function(num) {
	var numArray = num.toString().split("")
	//console.log(numArray)
	var start = 0
	var numlen = (numArray.length % 3) || 3
	
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

printer.print(123459812)
