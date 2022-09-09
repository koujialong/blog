# vue3 ref
## 作用
定义响应式变量
`reactive()` 的种种限制归根结底是因为 JavaScript 没有可以作用于所有值类型的 “引用” 机制。为此，Vue 提供了一个 `ref()` 方法来允许我们创建可以使用任何值类型的响应式 ref：
```js
import { ref } from 'vue'

const count = ref(0)
```
`ref()` 将传入参数的值包装为一个带 `.value` 属性的 ref 对象：
```js
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```
## 原理
和响应式对象的属性类似，`ref` 的 `.value` 属性也是响应式的。同时，当值为对象类型时，会用 `reactive()` 自动转换它的 `.value`。
一个包含对象类型值的 `ref` 可以响应式地替换整个对象：
```js
const objectRef = ref({ count: 0 })

// 这是响应式的替换
objectRef.value = { count: 1 }
```
## 特点
ref 被传递给函数或是从一般对象上被解构时，不会丢失响应性：
```js
const obj = {
  foo: ref(1),
  bar: ref(2)
}

// 该函数接收一个 ref
// 需要通过 .value 取值
// 但它会保持响应性
callSomeFunction(obj.foo)

// 仍然是响应式的
const { foo, bar } = obj
```
`ref()` 让我们能创造一种对任意值的 “引用”，并能够在不丢失响应性的前提下传递这些引用。这个功能很重要，因为它经常用于将逻辑提取到 组合函数 中。
## ref 在模板中的解包
当 ref 在模板中作为顶层属性被访问时，它们会被自动“解包”，所以不需要使用 `.value`。下面是之前的计数器例子，用 `ref()` 代替：
```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }} <!-- 无需 .value -->
  </button>
</template>
```
请注意，仅当 ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， foo 是顶层属性，但 object.foo 不是。

所以我们给出以下 object：
```js
const object = { foo: ref(1) }
```
下面的表达式将不会像预期的那样工作：
```vue-html
{{ object.foo + 1 }}
```
渲染的结果会是一个 `[object Object]`，因为 `object.foo` 是一个 `ref` 对象。我们可以通过将 `foo` 改成顶层属性来解决这个问题：
```js
const { foo } = object
```
```vue-html
{{ object.foo + 1 }}
```
需要注意的是，如果一个 ref 是文本插值（即一个 <code v-pre>{{ }}</code> 符号）计算的最终值，它也将被解包。因此下面的渲染结果将为 1：
```vue-html
{{ object.foo }}
```
这只是文本插值的一个方便功能，相当于 <code v-pre>{{ object.foo.value }}</code>。
## ref 在响应式对象中的解包
当一个 `ref` 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样
```js
const count = ref(0)
const state = reactive({
  count
})

console.log(state.count) // 0

state.count = 1
console.log(count.value) // 1
```
如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref：
```js
const otherCount = ref(2)

state.count = otherCount
console.log(state.count) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log(count.value) // 1
```
只有当嵌套在一个深层响应式对象内时，才会发生 ref 解包。当其作为浅层响应式对象的属性被访问时不会解包。
## 数组和集合类型的 ref 解包
跟响应式对象不同，当 ref 作为响应式数组或像 Map 这种原生集合类型的元素被访问时，不会进行解包。
```js
const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)
```
## 响应性语法糖
相对于普通的 JavaScript 变量，我们不得不用相对繁琐的 `.value` 来获取 ref 的值。这是一个受限于 JavaScript 语言限制的缺点。然而，通过编译时转换，我们可以让编译器帮我们省去使用 `.value` 的麻烦。Vue 提供了一种编译时转换，使得我们可以像这样书写之前的“计数器”示例：
```vue
<script setup>
let count = $ref(0)

function increment() {
  // 无需 .value
  count++
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```
