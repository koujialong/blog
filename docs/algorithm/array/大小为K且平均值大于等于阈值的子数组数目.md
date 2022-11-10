# 大小为K且平均值大于等于阈值的子数组数目 LC1343

## 题目
* 给你一个整数数组 arr 和两个整数 k 和 threshold 。
* 请你返回长度为 k 且平均值大于等于 threshold 的子数组数目。
* 输入：arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
* 输出：3
* 解释：子数组 [2,5,5],[5,5,5] 和 [5,5,8] 的平均值分别为 4，5 和 6 。其他长度为 3 的子数组的平均值都小于 4 （threshold 的值)。

## 题解
```javascript
/**
 * 滑动窗口
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    // 声明结果、窗口宽度、当前窗口和
    let count = 0, windowSize = 0, windowSum = 0;
    // 后判断sum所以i<arr.length + 1
    for(let i = 0; i < arr.length + 1; i++){
        if(windowSize === k){
            // 如果符合条件，结果+1
            if(windowSum / k >= threshold) count++;
            // 窗口收缩去调最前进入的值
            windowSum -= arr[i - k];
            // 窗口收缩
            windowSize--;
        }
        // 窗口前移
        // 窗口求和
        windowSum += arr[i];
        // 窗口宽度+1
        windowSize++;
    }
    return count;
};
```
