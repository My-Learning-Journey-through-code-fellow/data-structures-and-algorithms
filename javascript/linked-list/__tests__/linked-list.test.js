'use strict';

const LinkedList = require('../linkedlList');

describe('Linked List', () => {
  let list = new LinkedList();
  it('accepts new nodes as expected', () => {
    list.add('apple');
    list.add('banana');
    list.add('cherry');

    expect(list.head.value).toEqual('apple');
    expect(list.head.next.value).toEqual('banana');
    expect(list.head.next.next.value).toEqual('cherry');
  });

  it('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    console.log = ('this is my list', list);
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
    expect(list.head).toBeFalsy();
  });

  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(2);

    expect(list.head.value).toEqual(2);
  });

  it('Can properly insert multiple nodes', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(4);
    list.insert(6);

    expect(list.head.value).toEqual(6);
    expect(list.head.next.value).toEqual(4);
    expect(list.head.next.next.value).toEqual(2);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);

    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });

  it('Will return true when finding a value within the Linked List that exists', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(2)).toEqual(true);
  });

  it('Will return false when finding a value within the Linked List that does not exist', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(777)).toEqual(false);
  });

});
