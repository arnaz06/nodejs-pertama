var chai = require('chai')
var should = chai.Should()

var fizzbuzzTest = require('../helpers/fizzbuzz')

describe('Testing fizzbuzz',function(){
  it('If Multiply of 3 , should be print fizz', function(){
    fizzbuzzTest.fizzbuzz(3).should.equal('Fizz')
  })
  it('If Multiply of 5, should be print buzz',function(){
    fizzbuzzTest.fizzbuzz(5).should.equal('Buzz')
  })
  it('If Multiply of 3 and 5, should be print fizzbuzz', function(){
    fizzbuzzTest.fizzbuzz(15).should.equal('fizzBuzz')
  })
})
