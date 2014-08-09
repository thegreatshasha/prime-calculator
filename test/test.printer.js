var assert = require('assert')
var numToWordsPrinter = require('../lib/printer')
var expect = require('expect.js')
  
before(function(){
  this.printer = new numToWordsPrinter()
  
  this.hashes = {
    2: "two ",
    3: "three ",
    1001: "one thousand, one ",
    1000001: "one million, one ",
    10045: "ten thousand, forty five ",
    100112013145: "one hundred billion, one hundred twelve million, thirteen thousand, one hundred and forty five "
  }
  
})

suite('Prime Calculator', function() {
  test('match hashes to corresponding output from printer', function(){
    for (var key in this.hashes) {
      this.printer.print(key)
      assert.equal(this.printer.text, this.hashes[key])
    }
  })
  
});