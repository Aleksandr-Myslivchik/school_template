function Builder(val) {
  this.value = val
}

Builder.prototype.plus = function (...n) {
  this.value = n.reduce((value, currentNumber) => value + currentNumber, this.value)
  return this
}

Builder.prototype.get = function () {
  return this.value
}

function IntBuilder(int = 0) {
  Builder.call(this, int)
}

IntBuilder.prototype = Object.create(Builder.prototype)
IntBuilder.prototype.constructor = IntBuilder

IntBuilder.prototype.minus = function (...n) {
  this.value = n.reduce((value, currentNumber) => value - currentNumber, this.value)
  return this
}

IntBuilder.prototype.multiply = function (n) {
  this.value *= n
  return this
}

IntBuilder.prototype.divide = function (n) {
  this.value /= n
  return this
}

IntBuilder.prototype.mod = function (n) {
  this.value %= n

  return this
}

IntBuilder.prototype.random = function random(from, to) {
  return from + Math.floor((to - from + 1) * Math.random())
}
class StringBuilder extends Builder {
  constructor(string = '') {
    super(string)
  }

  minus(...n) {
    this.value = this.value.split('')
    n.reduce((acc, currentNumber) => {
      acc.length -= currentNumber > acc.length ? acc.length
        : currentNumber
      return acc
    }, this.value)
    this.value = this.value.join('')
    return this
  }

  multiply(n) {
    this.value = this.value.repeat(n)
    return this
  }

  divide(n) {
    this.value = this.value.split('')
    this.value.length = Math.floor(this.value.length / n)
    this.value = this.value.join('')
    return this
  }

  remove(str) {
    const strLength = str.length
    const strIndex = this.value.indexOf(str)
    this.value = this.value.split('')
    this.value.splice(strIndex, strLength)
    this.value = this.value.join('')
    return this
  }

  sub(from, n) {
    this.value = this.value.substr(from, n)
    return this
  }
}

console.log(StringBuilder)
