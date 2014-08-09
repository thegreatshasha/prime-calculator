#Make a node.js project in coffeescript with export and stuff
printer = require("./printer")
sieve = {}

# The theoretical bound on number of integers necessary to generate n primes
sieve.upperBound = (num) ->
  parseInt num * (Math.log(num) + Math.log(Math.log(num)))

sieve.composites = {}
sieve.currentPrime = 1
sieve.primes = [2]
sieve.calculate = ->
  max = sieve.upperBound(1000)
  count = 1
  while count < 1000
    sieve.currentPrime += 2
    unless sieve.composites[sieve.currentPrime]
      count += 1
      sieve.primes.push sieve.currentPrime
      i = sieve.currentPrime

      while i <= max
        sieve.composites[i] = true
        i += 2 * sieve.currentPrime
  printer.print sieve.primes
  return

sieve.calculate()