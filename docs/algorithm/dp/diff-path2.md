# 不同路径2 LC63
## 题目
* 一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 “`Start`” ）。
* 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “`Finish`”）。
* 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
* 网格中的障碍物和空位置分别用 `1` 和 `0` 来表示。
###
* 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
* 输出：2
* 解释：3x3 网格的正中间有一个障碍物。
* 从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右

## 题解
```javascript
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(OG) {
    // 如果起步点有障碍则有0条路径
    if(OG[0][0]) return 0;
    const m=OG.length,n=OG[0].length;
    // 初始化一个和原始数据一样默认为0的二维数组
    const dp=Array.from({length:m},_=>new Uint32Array(n));
    // 起点标为1开始动态规划路径
    dp[0][0]=1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 如果原始数组数据为1有障碍或者是左上角起步点跳出循环
            if(OG[i][j]||(!i&&!j)) continue;
            // 当前元格的有解数量=当前单元格左侧单元格+当前单元格上方单元格的和（遇到边界则为+0）
            dp[i][j]=(i?dp[i-1][j]:0)+(j?dp[i][j-1]:0)
        }
    }
    // 最终解为右下角单元格数值
    return dp[m-1][n-1]
};
```
