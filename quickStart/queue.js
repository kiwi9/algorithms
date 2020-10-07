// 队列
const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

while (queue.length) {
  console.log(queue.shift());
}
