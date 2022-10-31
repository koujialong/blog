# 最小路径和 LC64
## 题目
* 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
* 说明：每次只能向下或者向右移动一步。

* 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
* 输出：7
* 解释：因为路径 1→3→1→1→1 的总和最小。

## 题解
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m=grid.length,n=grid[0].length
    // 创建m*n全为0的动态规划数组
    const dp=Array.from({length:m},_=>new Uint32Array(n));
    // 起点设置为原始数组起点数值
    dp[0][0]=grid[0][0]
    for (let i = 0; i < m; i++) {
        for (let j = 0; j <n; j++) {
            // 如果为起点跳出循环
            if(!i&&!j) continue;
            // 当前单元格值=原始单元格值+最小值（左侧值，上侧值）
            dp[i][j]=grid[i][j]+Math.min(i?dp[i-1][j]:+Infinity,j?dp[i][j-1]:+Infinity)
        }
    }
    // 题解为终点值
    return dp[m-1][n-1]
};
```
