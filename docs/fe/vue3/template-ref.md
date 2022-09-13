# vue3 模板应用
## 访问模板引用
为了通过组合式 API 获得该模板引用，我们需要声明一个同名的 ref：
```vue
<script setup>
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <input ref="input" />
</template>
```
如果不使用 `<script setup>`，需确保从 `setup()` 返回 ref：
```js
export default {
  setup() {
    const input = ref(null)
    // ...
    return {
      input
    }
  }
}
```
注意，你只可以在组件挂载后才能访问模板引用。如果你想在模板中的表达式上访问 `input`，在初次渲染时会是 `null`。这是因为在初次渲染前这个元素还不存在呢！

如果你需要侦听一个模板引用 ref 的变化，确保考虑到其值为 `null` 的情况：
```js
watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
})
```

## v-for 中的模板引用
当在 `v-for` 中使用模板引用时，对应的 ref 中包含的值是一个数组，它将在元素被挂载后包含对应整个列表的所有元素：
```vue
<script setup>
import { ref, onMounted } from 'vue'

const list = ref([
  /* ... */
])

const itemRefs = ref([])

onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
</template>
```
应该注意的是，ref 数组并不保证与源数组相同的顺序。

## 函数模板引用
除了使用字符串值作名字，ref attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数：
```vue-html
<input :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ }">
```
注意我们这里需要使用动态的 `:ref` 绑定才能够传入一个函数。当绑定的元素被卸载时，函数也会被调用一次，此时的 `el` 参数会是 `null`。你当然也可以绑定一个组件方法而不是内联函数。

## 组件上的 ref
模板引用也可以被用在一个子组件上。这种情况下引用中获得的值的是组件实例：
```vue
<script setup>
import { ref, onMounted } from 'vue'
import Child from './Child.vue'

const child = ref(null)

onMounted(() => {
  // child.value 是 <Child /> 组件的实例
})
</script>

<template>
  <Child ref="child" />
</template>
```
如果一个子组件使用的是选项式 API 或没有使用 `<script setup>`，被引用的组件实例和该子组件的 `this` 完全一致，
这意味着父组件对子组件的每一个属性和方法都有完全的访问权。这使得在父组件和子组件之间创建紧密耦合的实现细节变得很容易，当然也因此，
应该只在绝对需要时才使用组件引用。大多数情况下，你应该首先使用标准的 `props` 和 `emit` 接口来实现父子组件交互。

有一个例外的情况，使用了 `<script setup>` 的组件是默认私有的：一个父组件无法访问到一个使用了 `<script setup>` 
的子组件中的任何东西，除非子组件在其中通过 `defineExpose` 宏显式暴露：
```vue
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```
当父组件通过模板引用获取到了该组件的实例时，得到的实例类型为 `{ a: number, b: number }` (ref 都会自动解包，和一般的实例一样)。




