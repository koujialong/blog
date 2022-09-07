# VitePress GitHub Pages搭建博客
## 创建项目
### 创建工程文件夹
```shell
$ mkdir vitepress-starter && cd vitepress-starter
```
### 初始化工程
```shell
$ yarn init
```
### 初始化 VitePress,添加VitePress到工程
```shell
$ yarn add --dev vitepress vue
```
### 创建第一个博客
```shell
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```
### 配置开发环境
添加脚本到`package.json`
```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```
### 启动本地开发环境
```shell
$ yarn docs:dev
```
### 添加页面
现在向项目中添加更多的页面，例如`blog.md`,你的工程结构可以像下面这样

```
.
├─ docs
│  ├─ blog.md
│  └─ index.md
└─ package.json
```
## 配置VitePress
不需要任何配置，我们可以看到一个基础的VitePress页面,你也可以去手动的配置我们的VitePress。在`/docs`目录下创建`.vitepress`文件夹,然后创建
`config.js`到这个文件夹下，你的工程结构如下
```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json

```
配置下`.vitepress/config.js`,基础配置如下
```javascript
module.exports = {
  title: "博客", // 网站标题
  description: "", //网站描述
  base: "/blog/", //  部署时的路径 默认 /  可以使用二级地址 /base/
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
    siteTitle: 'karl blog',
    repo: "vuejs/vitepress", // 你的 github 仓库地址，网页的右上角会跳转
    // 头部导航
    nav: nav(),
    // 侧边导航
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
      text:'js',
      collapsible:true,
      items:[
        {text:'js基础',link:'/fe/js/index.md'}
      ]
    }
  ]
}
```
## 创建Github Pages、自动化部署
### 配置GitHub项目
1. 创建github项目，项目权限必须是public,private需要付费才能使用pages
2. 在仓库下，单击Settings（设置）。
3. 在`Build and deployment`下的`Source`选择一个发布分支![img](/img/publishing-source-drop-down.png)
4. 选择发布源的文件夹![img](/img/publishing-source-folder-drop-down.png)
5. 点击保存
### 配置自动化部署
   1. 选择Action目录,点击`New workflow`![img](/img/workflow.png)
   2. 选择Simple workflow,命名为`deploy.yml`，配置如下
   ```yaml
   name: Deploy

   on:
     push:
       branches:
         - main

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v3
           with:
             node-version: 16
             cache: yarn
         - run: yarn install --frozen-lockfile

         - name: Build
           run: yarn docs:build

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: docs/.vitepress/dist
   ```
3. 现在提交你的项目到`main`分支
4. 选择`gh-pages`分支作为你的GitHub Pages来源，现在你每次推送都会自动部署到Github Pages
## 最终成果
![img](/img/vitepress.png)

