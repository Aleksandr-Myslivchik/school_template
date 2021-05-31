export default class TreeNode { // Item который хранит данные
  constructor(data) {
    this.key = data.key
    this.value = data.value
    this.left = null
    this.right = null
    this.parent = null
  }
}
