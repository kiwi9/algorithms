// 链表
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node = new ListNode(1);
const node2 = new ListNode(2);

node.next = node2;

// 任意两结点间插入一个新结点
const node3 = new ListNode(3);

node3.next = node.next;
node.next = node3;

// console.log(node);
// console.log(node2);
// console.log(node3);

node.next = node3.next;

console.log(node);
console.log(node2);
console.log(node3);
