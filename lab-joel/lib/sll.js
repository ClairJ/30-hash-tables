'use strict';

const Node = require('./node.js');


class SLL {
  constructor() {
    this.head = null;
  }

  insertTail(key, value) {
    let node = new Node(key, value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    while (current.next) current = current.next;
    current.next = node;
    return this;
  }

}

module.exports = SLL;
