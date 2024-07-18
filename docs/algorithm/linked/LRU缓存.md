# LRU缓存 LC146

## 题目
- 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
- 实现 LRUCache 类：
- LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
- int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
- void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
- 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

---
- 输入
- ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
- [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
- 输出
- [null, null, null, 1, null, -1, null, -1, 3, 4]
---
- 解释
```javascript
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
```

## 题解
- 双向循环链表+哈希表
```javascript
// 节点数据结构
function Node(key = 0, value = 0) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.dummy = new Node();
  // 哨兵节点（链表头）构建双向循环链表提升插入删除效率
  this.dummy.prev = this.dummy;
  this.dummy.next = this.dummy;
  // 哈希表（提升查找效率）
  this.keyMap = new Map();
};

// 双向链表删除节点
LRUCache.prototype.remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

// 向链表头插入节点
LRUCache.prototype.setHead = function (node) {
  node.next = this.dummy.next;
  node.prev = this.dummy;
  node.next.prev = node;
  node.prev.next = node;
};

// 获取节点并移动到链表头
LRUCache.prototype.getNode = function (key) {
  const node = this.keyMap.get(key);
  if (!node) {
    return null;
  }
  this.remove(node);
  this.setHead(node);
  return node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.getNode(key);
  return node ? node.value : -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = this.getNode(key);
  if (node) {
    // 有节点，更新值
    node.value = value;
    return;
  }
  // 插入新节点
  node = new Node(key, value);
  this.keyMap.set(key, node);
  this.setHead(node);
  if (this.keyMap.size > this.capacity) {
    // 超出容量，删除链表尾节点(由于是双向循环链表，dummy.pre就是链表尾部节点)
    const delNode = this.dummy.prev;
    this.keyMap.delete(delNode.key);
    this.remove(delNode);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

