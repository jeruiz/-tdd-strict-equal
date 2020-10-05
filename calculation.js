function strictEqual(val1, val2) {
  if (val1 == val2 && typeof val1 == typeof val2) {
    return true
  } else {
    return false
  }
}

module.exports = strictEqual
