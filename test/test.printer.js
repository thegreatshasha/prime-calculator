var assert = require('assert')
var numToWordsPrinter = require('../lib/printer')
var expect = require('expect.js')
  
before(function(){
  this.printer = new numToWordsPrinter()
  
  this.hashes = {
    10045: "ten thousand and forty five"
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