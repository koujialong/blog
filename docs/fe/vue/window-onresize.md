# window.onresize事件在Vue项目中使用及坑点

## 定义和用法
onresize 事件会在窗口或框架被调整大小时发生。

## 语法
```html
<element onresize="SomeJavaScriptCode">
```
```javascript
window.onresize=()=>{SomeJavaScriptCode};
```

## 坑点
1. vue中父子组件同时使用`window.onresize`,会出现覆盖状况，我们需要改造下写法
```javascript
window.onresize=()=>{SomeJavaScriptCode};
```
改写成
```javascript
window.addEventListener('resize', () => {
  SomeJavaScriptCode
})
```
2. 由于window.onresize是全局事件，在其他页面改变界面时也会执行，这样可能会出现问题，需要在出这个界面时注销window.onresize事件
