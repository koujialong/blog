module.exports = {
  title: "Karl's blog", // 网站标题
  description: "Karl's blog", //网站描述
  base: "/blog", //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  head: [
    // 改变title的图标
    [
      "link",
      {
        rel: "icon",
        href: "/img/blog.png", //图片放在public文件夹下
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    siteTitle: 'Karl\'s Blog',
    //   头部导航
    nav: nav(),
    //   侧边导航
    sidebar: {
      '/fe/': sideBarFe(),
      '/book/': sideBarBook(),
      '/algorithm/': sideAlgorithm()
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022present Karl'
    },
  },
};

function nav() {
  return [
    {text: '前端', link: '/fe/ts/interface.md', activeMatch: '/fe/'},
    {text: '算法', link: '/algorithm/dp/diff-path.md', activeMatch: '/algorithm/'},
    {text: '读书笔记', link: '/book/principles-of-economics-macro.md', activeMatch: '/book/'}
  ]
}

function sideBarBook() {
  return [
    {
      text: '经济',
      collapsible: true,
      items: [
        {text: '经济学原理-宏观(曼昆)', link: '/book/principles-of-economics-macro.md'}
      ]
    },
  ]
}

function sideAlgorithm() {
  return [
    {
      text: '动态规划',
      collapsible: true,
      items: [
        {text: '不同路径1-LC62', link: '/algorithm/dp/diff-path.md'},
        {text: '不同路径2-LC63', link: '/algorithm/dp/diff-path2.md'},
        {text: '最小路径和-LC64', link: '/algorithm/dp/min-path-sum.md'},
        {text: '解码方法-LC91', link: '/algorithm/dp/decoding-method.md'},
        {text: '交叉字符串-LC97', link: '/algorithm/dp/交叉字符串.md'},
        {text:'整数拆分-LC343', link: '/algorithm/dp/整数拆分.md'},
        {text:'打家劫舍2-LC213', link: '/algorithm/dp/打家劫舍2.md'},
        {text:'不同的二叉搜索树-LC96', link: '/algorithm/dp/不同的二叉搜索树.md'},
        {text:'三角形最小路径和-LC120', link: '/algorithm/dp/三角形最小路径和.md'},
        {text:'单词拆分-LC139', link: '/algorithm/dp/单词拆分.md'},
        {text:'买卖股票的最佳时机-LC121', link: '/algorithm/dp/买卖股票的最佳时机.md'},
        {text:'买卖股票的最佳时机2-LC122', link: '/algorithm/dp/买卖股票的最佳时机2.md'},
        {text:'买卖股票的最佳时机3-LC123', link: '/algorithm/dp/买卖股票的最佳时机3.md'},
        {text:'买卖股票的最佳时机4-LC188', link: '/algorithm/dp/买卖股票的最佳时机4.md'},
        {text:'买卖股票的最佳时机含冷冻期-LC309', link: '/algorithm/dp/买卖股票的最佳时机含冷冻期.md'},
        {text:'买卖股票的最佳时机含手续费-LC712', link: '/algorithm/dp/买卖股票的最佳时机含手续费.md'},
      ]
    },
    {
      text: '哈希表',
      collapsible: true,
      items: [
        {text: '最长回文串-LC409', link: '/algorithm/hash-table/最长回文串.md'},
        {text: '总持续时间可被60整除的歌曲-LC1010', link: '/algorithm/hash-table/总持续时间可被60整除的歌曲.md'},
      ]
    },
    {
      text: '指针',
      collapsible: true,
      items: [
        {text: '较大分组的位置-LC830', link: '/algorithm/pointer/较大分组的位置.md'},
        {text: '删除有序数组中的重复项-LC26', link: '/algorithm/pointer/删除有序数组中的重复项.md'},
        {text: '删除有序数组中的重复项II-LC80', link: '/algorithm/pointer/删除有序数组中的重复项II.md'},
        {text: '判断子序列-LC392', link: '/algorithm/pointer/判断子序列.md'},
      ]
    },
    {
      text: '树',
      collapsible: true,
      items: [
        {text: '收集树上所有苹果的最少时间-L1443', link: '/algorithm/tree/收集树上所有苹果的最少时间.md'},
        {text: '具有所有最深节点的最小子树-L1865', link: '/algorithm/tree/具有所有最深节点的最小子树.md'},
        {text: '二叉树的最小深度-LC111', link: '/algorithm/tree/二叉树的最小深度.md'},
        {text: '二叉树的中序遍历-LC94', link: '/algorithm/tree/二叉树的中序遍历.md'},
      ]
    },
    {
      text: '数组',
      collapsible: true,
      items: [
        {text: '判断一个数的数字计数是否等于数位的值-L2283', link: '/algorithm/array/判断一个数的数字计数是否等于数位的值.md'},
        {text: '你可以工作的最大周数-LC1953', link: '/algorithm/array/你可以工作的最大周数.md'},
        {text: '相对名次-LC506', link: '/algorithm/array/相对名次.md'},
        {text: '无法吃午餐的学生数量-LC1700', link: '/algorithm/array/无法吃午餐的学生数量.md'},
        {text: '执行所有后缀指令-LC2120', link: '/algorithm/array/执行所有后缀指令.md'},
        {text: '大小为K且平均值大于等于阈值的子数组数目-LC1343', link: '/algorithm/array/大小为K且平均值大于等于阈值的子数组数目.md'},
        {text: '翻转卡片游戏-LC822', link: '/algorithm/array/翻转卡片游戏.md'},
      ]
    },
    {
      text: '字符串',
      collapsible: true,
      items: [
        {text: '将句子排序-LC1859', link: '/algorithm/string/将句子排序.md'},
        {text: '向表达式添加括号后的最小结果-LC2232', link: '/algorithm/string/向表达式添加括号后的最小结果.md'}
      ]
    },
  ]
}

function sideBarFe() {
  return [
    {
      text: 'js',
      collapsible: true,
      items: [
        {text: 'js基础', link: '/fe/js/index.md'}
      ]
    },
    {
      text: 'ts',
      collapsible: true,
      items: [
        {text: 'interface 接口', link: '/fe/ts/interface.md'},
        {text: 'class 类', link: '/fe/ts/class.md'},
        {text: 'function 函数', link: '/fe/ts/function.md'},
        {text: 'generic 泛型', link: '/fe/ts/generic.md'},
        {text: 'enum 枚举', link: '/fe/ts/enum.md'},
        {text: '类型推论', link: '/fe/ts/type-inference.md'},
        {text: '类型兼容性', link: '/fe/ts/type-compatibility.md'},
        {text: '高级类型', link: '/fe/ts/high-level-types.md'},
      ]
    },
    {
      text: 'css',
      collapsible: true,
      items: [
        {text: 'tailwind 使用', link: '/fe/css/tailwind.md'}
      ]
    },
    {
      text: 'vue',
      collapsible: true,
      items: [
        {text: 'VitePress搭建博客', link: '/fe/vue/vite-press.md'},
        {text: 'window.onresize Vue坑点', link: '/fe/vue/window-onresize.md'},
      ]
    },
    {
      text: 'vue3',
      collapsible: true,
      items: [
        {text: 'reactive', link: '/fe/vue3/reactive.md'},
        {text: 'ref', link: '/fe/vue3/ref.md'},
        {text: '计算属性', link: '/fe/vue3/computed.md'},
        {text: '侦听器', link: '/fe/vue3/watch.md'},
        {text: '生命周期', link: '/fe/vue3/lifecycle.md'},
        {text: '模板引用', link: '/fe/vue3/template-ref.md'},
        {text: '组件', link: '/fe/vue3/component.md'},
        {text: 'React Vue Hooks对比', link: '/fe/vue3/vue-react-hooks.md'}
      ]
    },
    {
      text: 'nodejs',
      collapsible: true,
      items: [
        {text: 'Koa2基础环境搭建', link: '/fe/nodejs/Koa2基础环境搭建.md'},
      ]
    },
  ]
}

