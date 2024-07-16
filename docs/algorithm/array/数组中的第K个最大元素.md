# 数组中的第K个最大元素 LC215

## 题目
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

* 输入: [3,2,1,5,6,4], k = 2
* 输出: 5

* 1 <= k <= nums.length <= 10**5
* -10**4 <= nums[i] <= 10**4

## 题解
```javascript
// 完全桶排序
var findKthLargest = function (nums, k) {
  const buckets = new Array(10 ** 4 * 2 + 1).fill(0);
  nums.forEach((it) => {
    // 考虑负数情况，整体向前推进10**4位
    buckets[it + 10 ** 4]++;
  });
  // 反向寻找k位数
  for (let i = buckets.length - 1; i >= 0; i--) {
    k -= buckets[i];
    if (k <= 0) {
      return i - 10 ** 4;
    }
  }
  return 0;
};
```
