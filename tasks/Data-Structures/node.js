export default class Node { // Item который хранит данные
  constructor(data) {
    this.data = data
    this.next = null
    this.previous = null
    this.isTail = false
  }
}
