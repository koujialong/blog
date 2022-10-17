# Tailwind CSS 使用

Tailwind CSS 是一套以 Atomic/Utility-First CSS 为基础的完整的设计系统（Design System）。

## 安装
1. 通过 npm 安装 Tailwind
```shell
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```
2. 作为 PostCSS 插件来添加 Tailwind
将`tailwindcss`和`autoprefixer`添加到您的`PostCSS`配置中。 多数情况下，这是项目根目录下的`postcss.config.js`文件，但也可能是`.postcssrc`文件或是由`package.json`文件中的`postcss`键所指定。
```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
3. 创建配置文件
如果想要自定义的`Tailwind`安装，可以使用`Tailwind CLI`工具生成一份配置文件，这个命令行工具已包含在了`tailwindcss`这个 npm 包里了。
```shell
npx tailwindcss init
```
这将会在您的工程根目录创建一个最小的 tailwind.config.js 文件。
```js
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```
4. 导入css
```js
// app.js
import "tailwindcss/tailwind.css"
```

## 配置
1. 主题
在`theme`部分中，您可以定义调色板、字体、类型比例、边框大小、断点等任何与您网站视觉设计有关的东西。
```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```
`theme` 对象包含 `screens`、`colors` 和 `spacing` 的键，以及每一个可定制的核心插件的键。

* `screens` 键允许您自定义项目中的响应断点。
```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}
```
* `colors` 键允许您为您的项目定制全局调色板。
```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },

      // ...
    }
  }
}
```
* `spacing` 键允许您为您的项目定制全局的间距和大小比例。
```js
// tailwind.config.js
module.exports = {
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
  }
}
```
默认情况下，这些值会被 `padding`、 `margin`、 `width`、 `height`、 `maxHeight`、 `gap`、 `inset`、 `space`以及 `translate` 核心插件继承。

## 布局
### 基础
* Box Sizing box-border|box-content
* Display  block|inline-block|inline|flex|inline-flex|grid|table|hidden...
* 浮动 float-right|float-left|float-none
* 清除浮动 clear-left|clear-right|clear-both|clear-none
* Object Fit object-contain|object-cover|object-fill|object-none|object-scale-down
* Object Position object-bottom|object-center|object-left-bottom...
* 溢出 overflow-auto|overflow-visible|overflow-scroll|overflow-x-scroll...
* 定位 static|fixed|absolute|relative|sticky
* Top / Right / Bottom / Left 用于控制定位元素的位置的功能类
* 可见性 visible|invisible
* Z-Index z-0|z-10

### Flex Box
* Flex Direction flex-row|flex-row-reverse|flex-col|flex-col-reverse
* Flex Wrap flex-wrap|flex-wrap-reverse|flex-nowrap
* Flex flex-1|flex-auto|flex-initial|flex-none
* Flex Grow flex-grow-0|flex-grow
* Flex Shrink flex-shrink-0|flex-shrink
* Order order-first|order-last|order-none|order-1|order-2...
* Gap gap-0|gap-x-0|gap-y-0|gap-px
* Justify Content justify-start|justify-center|justify-end|justify-between|justify-around|justify-evenly
* Justify Items justify-items-start|justify-items-end|justify-items-center|justify-items-stretch
* Justify Self justify-self-auto|justify-self-start|justify-self-end|justify-self-center|justify-self-stretch
* Align Content content-center|content-start|content-end|content-between|content-around|content-evenly
* Align Items items-start|items-end|items-center|items-baseline|items-stretch
* Align Self self-auto|self-start|self-end|self-center|self-stretch|self-baseline

### 间距 
* 内边距 p-0|p-px|px-0|py-0|pl-0|pt-0|pr-0|pb-0...
* 外边距 m-0|m-px|mx-0|my-0|ml-0|mt-0|mr-0|mb-0...
* Space Between space-x-0|space-y-0|space-x-px|space-y-px...

### 尺寸
* 宽度 w-0|w-px|w-auto|w-1/2|w-full|w-screen|w-min|w-max
* 高度 h-0|h-px|h-auto|h-1/2|h-full|h-screen

### 排版
* 字体大小 text-xs|text-sm|text-base|text-lg|text-xl|text-2xl...text-9xl
* 字体样式 italic|Italics
* 字体粗细 font-thin|font-extralight|font-light|font-normal|font-medium|font-semibold|font-bold|font-extrabold|font-black
* 字母间距 tracking-tighter|tracking-tight|tracking-normal|tracking-wide|tracking-wider|tracking-widest
* 行高 leading-3
* 占位文本颜色 placeholder-gray-50...
* 占位文本不透明度 placeholder-opacity-0
* 文本对齐 text-left|text-center|text-right|text-justify
* 文本颜色 text-transparent|text-current|text-black|text-gray-50
* 文本颜色不透明度 text-opacity-0
* 文本装饰 underline|line-through|no-underline
* 文本转换 uppercase|lowercase|capitalize|normal-case
* 文本溢出 truncate|overflow-ellipsis|overflow-clip
* 垂直对齐 align-baseline|align-top|align-middle|align-bottom|align-text-top|align-text-bottom
* 文本换行 break-normal|break-words|break-all

### 背景
* 背景图像固定 bg-fixed|bg-local|bg-scroll
* 背景图像裁剪 bg-clip-border|bg-clip-padding|bg-clip-content|bg-clip-text
* 背景颜色 bg-transparent|bg-current|bg-black|bg-gray-50
* 背景颜色不透明度 bg-opacity-0
* 背景图像位置 bg-bottom
* 背景图像重复 bg-repeat|bg-no-repeat|bg-repeat-x|bg-repeat-round|bg-repeat-space
* 背景图像大小 bg-auto|bg-cover|bg-contain
* 背景图像 bg-gradient-to-t|bg-gradient-to-tr
```html
<div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ..."></div>
```

### 边框 
* 边框圆角 rounded-none|rounded-sm|rounded-xl|rounded-r|rounded-t|rounded-b|rounded-l...
* 边框厚度 border-0|border-r-0...
* 边框颜色 border-gray-50
* 边框样式 border-solid|border-dashed|border-dotted|border-double
* 分割线厚度 divide-x-0
* 分割线颜色 divide-gray-50
* 分割线样式 divide-solid|divide-dashed|divide-dotted|divide-double 
* 轮廓环厚度 ring-0
* 轮廓环颜色 ring-gray-50

### EFFECTS
* 盒阴影 shadow-sm shadow-lg
* 不透明度 opacity-0

### TRANSITIONS AND ANIMATION
* 过渡属性 transition-none|transition-all|transition|transition-colors|transition-shadow|transition-transform
* 过渡持续时间 duration-75
* 过渡计时函数 ease-linear|ease-in|ease-out|ease-in-out
* 过渡延迟 delay-75
* 动画 animate-none|animate-spin|animate-ping|animate-pulse|animate-bounce

### 转换
* 变换 transform|transform-gpu|transform-none
* 变换原点 origin-center|origin-top|origin-top-right
* 缩放 scale-0
* 旋转 rotate-0
* 平移 translate-x-0|translate-y-0
* 倾斜 skew-x-0|skew-y-0

### 交互
* 光标效果 cursor-auto|cursor-default|cursor-pointer|cursor-wait|cursor-text|cursor-move|cursor-help|cursor-not-allowed
* 大小调整 resize-none|resize-y|resize-x|resize
* 用户选择 select-none|select-text|select-all|select-auto

## vscode插件/工具
* Tailwind CSS IntelliSense
* Heroicons


