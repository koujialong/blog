# 不同路径 LC62
## 题目
* 一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 “`Start`” ）。
* 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “`Finish`”）。
* 问总共有多少条不同的路径？
###
* 输入：m = 3, n = 2
* 输出：3
* 解释：
* 从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下

## 题解
```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 初始化m*n全为0的二维数组
    const dp=Array.from({length:m},_=>new Uint32Array(n))
    // 起点标为1
    dp[0][0]=1;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // 起点跳出循环
        if(!i&&!j) continue;
        // 当前元格的有解数量=当前单元格左侧单元格+当前单元格上方单元格的和（遇到边界则为+0）
        dp[i][j]=(i?dp[i-1][j]:0)+(j?dp[i][j-1]:0)
      }
    }
    // 最终解为右下角单元格数值
    return dp[m-1][n-1]
  };
```
