# 环形链表 II LC142

## 题目

给定一个链表的头节点 head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos
来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

## 题解

- 哈希表

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    const visited = new Set();
    while (head) {
      if (visited.has(head)) {
        return head;
      }
      visited.add(head);
      head = head.next;
    }
    return null;
  };
```

- 快慢指针

1. slow入环节点 z
    - fast当前节点为 z+n(x+y)+x,x+y为环的长度,x为当前快指针和慢指针的距离
    - 快指针是慢指针两倍距离所以 z+n(x+y)+x=2z得到z=n(x+y)+x


2. 快慢指针相遇
    - 相遇点距离入环点x步,因为快指针在环内移动2y 慢指针y 环为x+y所以相遇点距离入环x

2. 声明新指针在起点和慢指针一起移动
    - 慢指针移动距离=n(x+y)+x(在环内转圈)
    - 新指针移动距离=z=n(x+y)+x
    - 所以新指针和慢指针一定相遇且相遇点在入环点


```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // z+n(x+y)+x=2z
    // z=n(x+y)+x
    let slow = head,
      fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        let pt = head;
        while (slow != pt) {
          slow = slow.next;
          pt = pt.next;
        }
        return pt;
      }
    }
    return null;
  };
```
