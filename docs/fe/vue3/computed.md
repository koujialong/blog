# vue3 计算属性
## 作用
简化模板中的表达式，数据缓存减少计算次数。
## 用法
```vue
<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>
```
我们在这里定义了一个计算属性 `publishedBooksMessage`。`computed()` 方法期望接收一个 `getter` 函数，返回值为一个计算属性 `ref`。
和其他一般的 ref 类似，你可以通过 `publishedBooksMessage.value` 访问计算结果。计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 `.value`。

Vue 的计算属性会自动追踪响应式依赖。它会检测到 `publishedBooksMessage` 依赖于 `author.books`，所以当 `author.books` 改变时，任何依赖于 `publishedBooksMessage` 的绑定都会同时更新。

## 计算属性缓存 vs 方法
在表达式中像这样调用一个函数也会获得和计算属性相同的结果：
```vue-html
<p>{{ calculateBooksMessage() }}</p>
```
```js
// 组件中
function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No'
}
```
若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于计算属性值会基于其响应式依赖被缓存。
一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要 `author.books` 不改变，无论多少次访问 `publishedBooksMessage` 都会立即返回先前的计算结果，
而不用重复执行 `getter` 函数。

这也解释了为什么下面的计算属性永远不会更新，因为 `Date.now()` 并不是一个响应式依赖：
```js
const now = computed(() => Date.now())
```
相比之下，方法调用总是会在重渲染发生时再次执行函数。

为什么需要缓存呢？想象一下我们有一个非常耗性能的计算属性 `lis`t，需要循环一个巨大的数组并做许多计算逻辑，并且可能也有其他计算属性依赖于 `list`。
没有缓存的话，我们会重复执行非常多次 `list` 的计算函数，然而这实际上没有必要！如果你确定不需要缓存，那么也可以使用方法调用。

## 可写计算属性
计算属性默认仅能通过计算函数得出结果。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 `getter` 和 `setter` 来创建：
```vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>
```
现在当你再运行 `fullName.value = 'John Doe'` 时，`setter` 会被调用而 `firstName` 和 `lastName` 会随之更新。

## 注意点

### 计算函数不应有副作用
计算属性的计算函数应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，不要在计算函数中做异步请求或者更改 DOM！
一个计算属性的声明中描述的是如何根据其他值派生一个值。因此计算函数的职责应该仅为计算和返回该值。

### 避免直接修改计算属性值
从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，
因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。

