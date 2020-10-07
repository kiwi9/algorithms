// 数组应用解题

// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 示例: 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

// 几乎所有的求和问题，都可以转化为求差问题。 这道题就是一个典型的例子，通过把求和问题转化为求差问题，事情会变得更加简单。

// 用map来存储键值对，key为数值，value为下标
// function fn(nums, target) {
//   const len = nums.length;
//   const diffs = {}

//   // 遍历数组，和target比较差值
//   for(let i=0;i<len;i++){

//     if(diffs[target - nums[i]] !== undefined){
//       return [diffs[target - nums[i]], i]
//     }

//     // 记录键值对和索引   {2:0, 7:1, 11:2, 15:3}
//     diffs[nums[i]] = i
//   }
// }

// console.log(fn([2,3, 4,15, 7, 2], 6));



function fn(nums, target) {
  const len = nums.length
  const map = new Map();

  for(let i=0;i<len;i++){
    if(map.get(target - nums[i]) !== undefined){
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
}

console.log(fn([2, 7, 11, 15], 9));