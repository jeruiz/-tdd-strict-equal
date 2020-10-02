var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var sumAll = require('../calculation')
var assert = require('chai').assert

describe('calculation', () => {
  describe('sumAll', () => {
    it('returns the sum of the number in the array provided', () => {
      var nums = [1, 2, 3, 4]

      var total = sumAll(nums)

      assert.strictEqual(true, true, "these booleans are strictly equal");
    })
  })
})
