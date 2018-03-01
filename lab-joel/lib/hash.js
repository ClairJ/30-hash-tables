'use strict';

const SLL = require('./sll.js');

class HashTable {
  constructor(size) {
    this.size = size || 5;
    this.memory = [...Array(this.size)];
  }


  hashKey(key) {
    let hash = key.split('').reduce((a,b) => a + b.charCodeAt(0), 0) % this.size;
    return hash;
  }

  set(key, value) {
    let index = this.hashKey(key);
    let sll = new SLL();

    if(this.memory[index] === undefined) {
      this.memory[index] = sll.insertTail(key,value);
    } else {
      this.memory[index].insertTail(key,value);
    }
  }

  get(key) {
    return this.memory[this.hashKey(key)];
  }

  remove(key) {
    let address = this.memory[this.hashKey(key)];
    let current = address.head;
    if (!current.next) this.memory[this.hashKey(key)] = undefined;
    while (current.next) {
      let prev = current;
      current = current.next;
      if (current.key === key) prev.next = current.next;
    }
  }
}


module.exports = HashTable;
