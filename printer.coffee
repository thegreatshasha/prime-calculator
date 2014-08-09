printer = {}
printer.rules =
  1: "one"
  2: "two"
  3: "three"
  4: "four"
  5: "five"
  6: "six"
  7: "seven"
  8: "eight"
  9: "nine"
  10: "ten"
  11: "eleven"
  12: "twelve"
  13: "thirteen"
  14: "fourteen"
  15: "fifteen"
  16: "sixteen"
  17: "seventeen"
  18: "eighteen"
  19: "ninetenn"
  20: "twenty"
  30: "thirty"
  40: "forty"
  50: "fifty"
  60: "sixty"
  70: "seventy"
  80: "eighty"
  90: "ninety"

printer.facevalues =
  9: "billion"
  6: "million"
  3: "thousand"
  2: "hundred"

printer.getRule = (num) ->
  key = parseInt(num)
  @rules[key]

printer.getFaceValue = (facenum) ->
  key = parseInt(facenum)
  @facevalues[key]

printer.log = (text) ->
  process.stdout.write text + " "  if text
  return

printer.printThreeDigitNumber = (numArray, faceValue) ->
  units = numArray[numArray.length - 1]
  tenth = numArray[numArray.length - 2]
  lastTwo = numArray[numArray.length - 2] + numArray[numArray.length - 1]
  i = 0

  while i < numArray.length - 2
    digit = numArray[i]
    printer.log printer.getRule(digit) + " " + printer.getFaceValue(numArray.length - 1 - i)  if printer.getRule(digit)
    i++
  printer.log "and"  if (parseInt(tenth) or parseInt(units)) and numArray.length > 2 and faceValue is 0
  if printer.getRule(lastTwo)
    printer.log printer.getRule(lastTwo)
  else
    if tenth
      tensDigit = parseInt(tenth)
      printer.log printer.getRule(tensDigit * 10)
    printer.log printer.getRule(units)  if units
  
  # Finally if facevalue passed as argument
  console.log printer.getFaceValue(faceValue)  if faceValue and parseInt(numArray.join())
  return

printer.print = (num) ->
  numArray = num.toString().split("")
  
  #console.log(numArray)
  start = 0
  numlen = (numArray.length % 3) or 3
  while start < numArray.length - 1
    end = start + numlen
    three_digits = numArray.slice(start, start + numlen)
    faceValue = numArray.length - end
    @printThreeDigitNumber three_digits, faceValue
    start += numlen
    numlen = 3
  return


#this.printThreeDigitNumber(123)
printer.print 312