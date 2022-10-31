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
    {text: '前端', link: '/fe/fe-home.md', activeMatch: '/fe/'},
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
        {text: '交叉字符串-LC97', link: '/algorithm/dp/交叉字符串.md'}
      ]
    },
    {
      text: '哈希表',
      collapsible: true,
      items: [
        {text: '最长回文串-LC409', link: '/algorithm/hash-table/最长回文串.md'},
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
  ]
}

