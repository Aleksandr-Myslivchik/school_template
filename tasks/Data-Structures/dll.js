import Node from './node'

export default class Dll {
  constructor() {
    this.head = null
  }

  getHead() {
    return this.head
  }

  getTail() {
    let currentNode = this.head
    if (!currentNode.next) return currentNode
    while (currentNode.next) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  traverse(order = true) {
    const {
      head,
    } = this
    const tail = this.getTail()
    const currentNode = order ? head : tail
    let step = currentNode

    while (step) {
      console.log(step)
      step = order ? step.next : step.previous
    }
  }

  add(data) {
    const node = new Node(data)
    if (!this.head) {
      node.isTail = true
      this.head = node
      return this
    }

    let currentNode = this.head

    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node
    currentNode.next.isTail = true
    currentNode.isTail = false
    currentNode.next.previous = currentNode
    return this
  }

  getNode(data) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.data === data) return currentNode
      currentNode = currentNode.next
    }
    return this
  }

  addAfter(value, parentNode) {
    const parent = this.getNode(parentNode)
    const afterCurrentnode = parent.next
    const node = new Node(value)
    parent.next = node
    node.previous = parent
    node.next = afterCurrentnode
    afterCurrentnode.previous = node
    return node
  }

  delete(value) {
    const nodeTodelete = this.getNode(value)
    if (nodeTodelete === this.head) {
      this.head = nodeTodelete.next
      this.head.previous = null
      return this
    }
    if (nodeTodelete.isTail === true) {
      nodeTodelete.previous.next = null
      nodeTodelete.previous.isTail = true
      return this
    }
    const previousNode = nodeTodelete.previous
    const nextNode = nodeTodelete.next
    previousNode.next = nextNode
    nextNode.previous = previousNode
    return this
  }

  isExist(data) {
    const node = this.getNode(data)

    return !!node
  }
}
