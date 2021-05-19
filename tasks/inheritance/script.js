function Builder(int = 0) {
  this.value = int
}

Builder.prototype.plus = function (...n) {
  this.value = n.reduce((value, currentNumber) => value + currentNumber, this.value)
  return this
}

Builder.prototype.minus = function (...n) {
  if (typeof this.value === 'string') {
    this.value = this.value.split('')
    n.reduce((acc, currentNumber) => {
      acc.length -= currentNumber > acc.length ? acc.length
        : currentNumber
      return acc
    }, this.value)
    this.value = this.value.join('')
  } else {
    this.value = n.reduce((value, currentNumber) => value - currentNumber, this.value)
  }
  return this
}

Builder.prototype.multiply = function (n) {
  if (typeof this.value === 'string') {
    this.value = this.value.repeat(n)
  } else {
    this.value *= n
  }
  return this
}

Builder.prototype.divide = function (n) {
  if (typeof this.value === 'string') {
    this.value = this.value.split('')
    this.value.length = Math.floor(this.value.length / n)
    this.value = this.value.join('')
  } else {
    this.value /= n
  }
  return this
}

Builder.prototype.mod = function (n) {
  if (typeof this.value === 'string') {
    return this
  }
  this.value %= n

  return this
}

Builder.prototype.get = function () {
  return this.value
}

Builder.random = function random(from, to) {
  return from + Math.floor((to - from + 1) * Math.random())
}

function IntBuilder() {
  Builder.call(this)
}

IntBuilder.prototype = Object.create(Builder.prototype)
IntBuilder.prototype.constructor = IntBuilder

class StringBuilder extends Builder {
  constructor(string = '') {
    super()
    this.value = string
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
StringBuilder()
