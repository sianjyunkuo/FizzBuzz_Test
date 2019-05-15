var should = chai.should()

describe('function fizzBuzz', function () {
  it('dividen by 3 and 5 should show FizzBuzz', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('dividen by 3 should show Fizz', function () {
    var result = fizzBuzz(3)
    result.should.be.equal('Fizz')
  })
  it('dividen by 5 should show Buzz', function () {
    var result = fizzBuzz(5)
    result.should.be.equal('Buzz')
  })
  it('if not dividen by 3 and 5 should show itself', function () {
    var result = fizzBuzz(16)
    result.should.be.deep.equal(16)
  })
})