'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  traverse() {
    let current = this.head;

    while (current) {
      current = current.next;
    }
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value) {
    let result = false;

    let current = this.head;
    while (current) {
      if (current.value === value) result = true;
      current = current.next;
    }
    return result;
  }

  toString() {
    let string = '';
    let current = this.head;
    while (current) {
      string += `{ ${current.value} } ->`;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      throw new Error('Linked List is empty.');
    }

    if (this.head.value === value) {
      this.insert(newValue);
      return;
    }

    let current = this.head;

    while (current) {
      if (current.next && current.next.value === value) {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        current = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      throw new Error('Linked List is empty.');
    }

    let current = this.head;

    while (current) {
      if (current.next === value) {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;

      }
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.add('apple');
list.add('banana');
list.add('cherry');
list.add('durian');
list.add('elderberry');

list.traverse();

module.exports = LinkedList;
