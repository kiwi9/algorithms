// 1创建数组
const arr = [1, 2, 3, 4];

// 创建数组
const arr2 = new Array(4).fill(1);

// console.log(arr);
// console.log(arr2);

// 2数组遍历
// for 从性能上看，for 循环遍历起来是最快的
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i], i);
}

// forEach
arr.forEach((item) => {
  //   console.log(item);
});

// map
arr.map((item) => {
  //   console.log(item);
});

// for of
for (const item of arr) {
  console.log(item);
}

// 3添加数组元素的三种方法
arr.unshift("0");

arr.push("9");

arr.splice(1, 0, "88");

console.log(arr);

// 删除数组元素的三种方法
arr.shift();

arr.pop();

arr.splice(1, 1);
console.log(arr);
