// 空间换时间，map来帮忙
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例: 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

function fn(nums, target) {
  const len = nums.length;
  const map = new Map();

  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
}

console.log(fn([2, 7, 11, 15], 9));

// 合并两个有序数组
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

// 方法1：合并后排序

// 方法2：双指针，从后往前
const merge = function (nums1, m, nums2, n) {
  // 定义指针指向到数组最后一位i,j  k为数组长度-1
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  // nums1,nums2都没有遍历完，同步改变指针
  while (i >= 0 && j >= 0) {
    // 比较指针位置谁大, nums1相当于容器
    if (nums1[i] >= nums2[j]) {
      // 设置大的数到最后一位
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  // 处理nums2还有剩余的情况
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
};

let nums1 = [5, 6, 7, 0, 0, 0];
let m = 3;
let nums2 = [2, 4, 5, 6, 8];
let n = 5;

merge(nums1, m, nums2, n);

console.log(nums1);

// 3.三数求和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// ===============
// 双指针法的使用场景，一方面，它可以做到空间换时间；另一方面，它也可以帮我们降低问题的复杂度
// 双指针法用在涉及求和、比大小类的数组题目里时，大前提往往是：该数组必须有序

// 思路：使用双指针，前提数组必须有序（从小到大）
// 遍历数组，把当前项固定，两个指针分别对应当前项的 下一个数字，最后一个末尾
// 如果指针位置的数相加大于0：说明右侧较大，右指针向左移
// 如果指针位置的数相加小于0：说明左侧较小，左指针向右移

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
function threeSum(nums) {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  const len = nums.length;
  let cur;

  for (let i = 0; i < len; i++) {
    cur = nums[i];
    let leftNum = nums[i + 1];
    let rightNum = nums[len - 1];
  }
}

let arr1 = [-1, 0, 1, 2, -1, -4];
threeSum(arr1);
