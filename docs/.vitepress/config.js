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
      '/fe/': sideBarFe()
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022present Karl'
    },
  },
};

function nav() {
  return [
    {text: '前端', link: '/fe/fe-home.md', activeMatch: '/fe/'}
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
      text: 'css',
      collapsible: true,
      items: [
        {text: 'css基础', link: '/fe/css/index.md'}
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
        {text: '组件', link: '/fe/vue3/component.md'}
      ]
    },
  ]
}

