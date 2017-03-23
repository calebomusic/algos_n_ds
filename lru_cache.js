var LinkedListNode = function(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}

var LinkedList = function() {
  this.head = new LinkedListNode(null, null);
  this.tail = new LinkedListNode(null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

LinkedList.prototype.prepend = function(key, val) {
  let newNext = this.head.next,
      newNode = new LinkedListNode(key, val);
      
  this.head.next = newNode;
  newNext.prev = newNode;
  newNode.prev = this.head;
  newNode.next = newNext;

  return newNode;
}

LinkedList.prototype.delete = function(key) {
  let curr = this.head.next,
      prev = this.head;

  while(curr !== this.tail) {
    next = curr.next;

    if(curr.key === key) {
      prev.next = next;
      next.prev = prev;
    } else {
      prev = curr;
    }

    curr = curr.next;
  }

  return this;
}

LinkedList.prototype.last = function() {
  let last = this.tail.prev;
  return last === this.head ? null : last;
}

LinkedList.prototype.remove = function(node) {
  let prev = node.prev,
      newNext = node.next;

    prev.next = newNext;
    newNext.prev = prev;

    node.prev = null;
    node.next = null;

    return node;
}

LinkedList.prototype.find = function(key) {
  let curr = this.head.next;

  while(curr !== this.tail) {
    if(curr.key === key) {
      return curr.val;
    }

    curr = curr.next;
  }

  return -1;
}

var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.store = {};
  this.count = 0;
  this.linkedList = new LinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.store[key]) {
    this.update(this.store[key]);
    return this.store[key]
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // handle count and eject
  let node = this.store[key];
  if(node === undefined || node === null) {
    if(this.count === this.capacity) {
      this.eject();
    }

    this.count ++;
  } else {
    this.linkedList.remove(node);
  }

  this.store[key] = this.linkedList.prepend(key, value);

  return this.store[key];
};

LRUCache.prototype.eject = function() {
  this.count --;
  let lruNode = this.linkedList.last(),
      key = lruNode.key;
  this.linkedList.remove(lruNode);
  this.store[key] = null;
}

LRUCache.prototype.update = function(node) {
  let val = node.val,
      key = node.key;

  this.linkedList.remove(node);
  this.store[key] = this.linkedList.prepend(key, val);
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// ["LRUCache","put","put","get","put","get","get"]
// [[2],[2,1],[1,1],[2],[4,1],[1],[2]]

 let lru = new LRUCache(2)

 lru.put(2, 1)
 lru.put(1, 1)
 lru.get(2)
 lru.put(4,1)
 lru.get(1)
 lru.get(2)

 console.log(lru.store);
