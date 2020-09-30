let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let sumAll = require('../calculation')

describe('calculation', () => {
  describe('sumAll', () => {
    it('returns the sum of the number in the array provided', () => {
      let nums = [1, 2, 3, 4]

      let total = sumAll(nums)

      expect(total).to.equal(10)
    })
  })
})
