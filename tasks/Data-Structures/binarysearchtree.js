import TreeNode from './binarytreenode'

export default class BST {
  constructor() {
    this.root = null
  }

  insert(key, value) {
    const node = new TreeNode({ key, value })
    if (!this.root) {
      this.root = node
      this.length = 1
      return this
    }
    let currentNode = this.root
    while (currentNode) {
      if (key === currentNode.key) {
        return 'Already exists'
      }
      if (key < currentNode.key) {
        if (!currentNode.left) {
          currentNode.left = node
          this.length += 1
          currentNode.left.parent = currentNode
          break
        } else {
          currentNode = currentNode.left
        }
      } else if (!currentNode.right) {
        currentNode.right = node
        this.length += 1
        currentNode.right.parent = currentNode
        break
      } else {
        currentNode = currentNode.right
      }
    }
    return this
  }

  delete(key) {
    const nodeTodelete = this.search(key)
    const { parent, left, right } = nodeTodelete
    if (nodeTodelete === this.root) {
      if (!left && !right) {
        this.root = undefined
        this.length -= 1
        return this
      }
      if (!left && right) {
        let step = nodeTodelete.right
        while (step) {
          if (step.left) {
            step = step.left
          } else {
            break
          }
        }
        if (step.right) {
          step.parent.left = step.right
          step.right.parent = step.parent
        } else {
          step.parent.left = null
        }
        this.root = step
        this.root.right = right
        right.parent = this.root
        this.root.parent = null
        this.length -= 1
        return this
      }
      if (left && !right) {
        this.root = left
        this.root.parent = null
        this.length -= 1
        return this
      }
      if (left && right) {
        let step = nodeTodelete.right
        while (step) {
          if (step.left) {
            step = step.left
          } else {
            break
          }
        }

        if (!this.root.right === step) {
          step.parent.left = step.right ? step.right : null
          step.right.parent = step.right ? step.parent : null
          this.root = step
          this.root.left = left
          this.root.right = right
          this.root.left.parent = this.root
          this.root.right.parent = this.root
          return this
        }

        this.root = step
        this.root.left = left
        this.root.left = step.right
        left.parent = this.root
        this.root.parent = null
      }
      this.length -= 1
      return this
    }

    if (!left && !right) {
      if (parent.right === nodeTodelete) {
        parent.right = null
        this.length -= 1
        return this
      }
      parent.left = null
      this.length -= 1
      return this
    }

    if (!left && right) {
      right.parent = parent
      if (parent.right === nodeTodelete) {
        parent.right = right
        this.length -= 1
        return this
      }
      parent.left = right
      this.length -= 1
      return this
    }
    if (left && !right) {
      left.parent = parent
      if (parent.left === nodeTodelete) {
        parent.left = left
        this.length -= 1
        return this
      }
      parent.right = left
      this.length -= 1
      return this
    }

    if (left && right) {
      let targetNode = nodeTodelete.right
      while (targetNode) {
        if (targetNode.left) {
          targetNode = targetNode.left
        } else {
          break
        }
      }
      if (targetNode === right) {
        targetNode.parent = parent
        if (parent.right === nodeTodelete) {
          parent.right = targetNode
          targetNode.left = left
          left.parent = targetNode
          this.length -= 1
          return this
        }
        parent.left = targetNode
        left.parent = targetNode
        targetNode.left = left
        this.length -= 1
        return this
      }

      targetNode.parent.left = targetNode.right ? targetNode.right : null
      targetNode.right.parent = targetNode.right ? targetNode.parent : null
      targetNode.parent = parent
      right.parent = targetNode
      left.parent = targetNode
      targetNode.left = left
      targetNode.right = right

      if (parent.right === nodeTodelete) {
        parent.right = targetNode
      } else {
        parent.left = targetNode
      }
    }
    this.length -= 1
    return this
  }

  search(key) {
    let currentNode = this.root
    let target
    while (currentNode) {
      if (key === currentNode.key) {
        target = currentNode
        break
      }
      if (key < currentNode.key) {
        if (!currentNode.left) {
          return 'There\'s no such a key'
        }
        currentNode = currentNode.left
      } else {
        if (!currentNode.right) {
          return 'There\'s no such a key'
        }
        currentNode = currentNode.right
      }
    }
    return target
  }

  traverse() {
    let cn = this.root
    const { root: { key: rootKey } } = this
    const liste = []

    while (cn) {
      if (this.length === liste.lentgh) break
      if (cn === this.root && !liste.includes(rootKey) && liste.includes(this.root.left.key)) {
        liste.push(rootKey)
        cn = this.root.right ? this.root.right : null
        if (cn === null) break
      } else if (liste.includes(cn.key)) {
        if (!cn.right && !cn.left) {
          cn = cn.parent
        } if (cn.right && !liste.includes(cn.right.key)) {
          cn = cn.right
        } if (liste.includes(cn.right.key)) {
          cn = cn.parent
        }
      } else if (!liste.includes(cn.key) && !cn.left && !cn.right) {
        liste.push(cn.key)
        cn = cn.parent
      } else if (!liste.includes(cn.key) && !cn.left && cn.right) {
        liste.push(cn.key)
        cn = cn.right
      } else if (!liste.includes(cn.key) && liste.includes(cn.left.key) && cn.right) {
        liste.push(cn.key)
        cn = cn.right
      } else if (!liste.includes(cn.key) && liste.includes(cn.left.key) && !cn.right) {
        liste.push(cn.key)
        cn = cn.parent
      } else {
        cn = cn.left
      }
    }

    return liste
  }
}
