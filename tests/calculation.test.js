// var mocha = require('mocha')
// var it = require('mocha').it
var expect = require('chai').expect
var strictEqual = require('../calculation')

describe('calculation', () => {
  describe('strictEqual', () => {
    it('returns false for a strict equality', () => {
      var isEqual = strictEqual(5, '5')

      expect(isEqual).to.equal(false)
    }),
    it('returns true for a strict equality', () => {
      var isEqual = strictEqual('a', 'a')

      expect(isEqual).to.equal(true)
    }),
    it('returns true for a strict equality', () => {
      var isEqual = strictEqual(5, 5)

      expect(isEqual).to.equal(true)
    }),
    it('returns false for a strict equality', () => {
      var isEqual = strictEqual('a', 'b')

      expect(isEqual).to.equal(false)
    }),
    it('returns false for a strict equality', () => {
      var isEqual = strictEqual(3, 8)

      expect(isEqual).to.equal(false)
    })
  })
})
