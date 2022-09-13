# vue3 组件
## 注册
### 全局注册
  * 我们可以使用 Vue 应用实例的 app.component() 方法，让组件在当前 Vue 应用中全局可用。
    ```js
    import MyComponent from './App.vue'
    
    app.component('MyComponent', MyComponent)
        .component('ComponentB', ComponentB)
        .component('ComponentC', ComponentC)
    ```
### 局部注册
  * 全局注册虽然很方便，但有以下几个问题：
    * 全局注册，但并没有被使用的组件无法在生产打包时被自动移除 (也叫“tree-shaking”)。如果你全局注册了一个组件，即使它并没有被实际使用，它仍然会出现在打包后的 JS 文件中。
    * 全局注册在大型项目中使项目的依赖关系变得不那么明确。在父组件中使用子组件时，不太容易定位子组件的实现。和使用过多的全局变量一样，这可能会影响应用长期的可维护性。
  * 相比之下，局部注册的组件需要在使用它的父组件中显式导入，并且只能在该父组件中使用。它的优点是使组件之间的依赖关系更加明确，并且对 tree-shaking 更加友好。
  * 在使用 `<script setup>` 的单文件组件中，导入的组件可以直接在模板中使用，无需注册：
    ```vue
    <script setup>
    import ComponentA from './ComponentA.vue'
    </script>
    
    <template>
      <ComponentA />
    </template>
    ```
  * 如果没有使用 `<script setup>`，则需要使用 components 选项来显式注册：
    ```js
    import ComponentA from './ComponentA.js'
    
    export default {
      components: {
        ComponentA
      },
      setup() {
        // ...
      }
    }
    ```

## Props
### Props声明
在使用 `<script setup>` 的单文件组件中，props 可以使用 `defineProps()` 宏来声明：
```vue
<script setup>
const props = defineProps(['foo'])

console.log(props.foo)
</script>
```
在没有使用 `<script setup>` 的组件中，prop 可以使用 `props` 选项来声明：
```js
export default {
  props: ['foo'],
  setup(props) {
    // setup() 接收 props 作为第一个参数
    console.log(props.foo)
  }
}
```
注意传递给 `defineProps()` 的参数和提供给 `props` 选项的值是相同的，两种声明方式背后其实使用的都是 prop 选项。
除了使用字符串数组来声明 prop 外，还可以使用对象的形式：
```js
// 使用 <script setup>
defineProps({
  title: String,
  likes: Number
})
```
```js
// 非 <script setup>
export default {
  props: {
    title: String,
    likes: Number
  }
}
```
如果你正在搭配 TypeScript 使用 `<script setup>`，也可以使用类型标注来声明 props：
```vue
<script setup lang="ts">
defineProps<{
  title?: string
  likes?: number
}>()
</script>
```
### 传递 prop 的细节
如果一个 prop 的名字很长，应使用 camelCase 形式，因为它们是合法的 JavaScript 标识符，可以直接在模板的表达式中使用，也可以避免在作为属性 key 名时必须加上引号。
```js
defineProps({
  greetingMessage: String
})
```
```vue-html
<span>{{ greetingMessage }}</span>
```
虽然理论上你也可以在向子组件传递 props 时使用 camelCase 形式 (使用 DOM 模板时例外)，但实际上为了和 HTML attribute 对齐，我们通常会将其写为 kebab-case 形式：
```vue-html
<MyComponent greeting-message="hello" />
```
如果你想要将一个对象的所有属性都当作 props 传入，你可以使用`没有参数的 v-bind`，即只使用 `v-bind` 而非 `:prop-name`。例如，这里有一个 post 对象：
```js
const post = {
  id: 1,
  title: 'My Journey with Vue'
}
```
```vue-html
<BlogPost v-bind="post" />
```
而这实际上等价于：
```vue-html
<BlogPost :id="post.id" :title="post.title" />
```
### 单向数据流
所有的 props 都遵循着单向绑定原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。
你想要更改一个 prop 的需求通常来源于以下两种场景：
* prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性。在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可：
```js
const props = defineProps(['initialCounter'])

// 计数器只是将 props.initialCounter 作为初始值
// 像下面这样做就使 prop 和后续更新无关了
const counter = ref(props.initialCounter)
```
* 需要对传入的 prop 值做进一步的转换。在这种情况中，最好是基于该 prop 值定义一个计算属性：
```js
const props = defineProps(['size'])

// 该 prop 变更时计算属性也会自动更新
const normalizedSize = computed(() => props.size.trim().toLowerCase())
```
### Prop 校验
要声明对 props 的校验，你可以向 `defineProps()` 宏提供一个带有 props 校验选项的对象，例如：
```js
defineProps({
  // 基础类型检查
  // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true
  },
  // Number 类型的默认值
  propD: {
    type: Number,
    default: 100
  },
  // 对象类型的默认值
  propE: {
    type: Object,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default(rawProps) {
      return { message: 'hello' }
    }
  },
  // 自定义类型校验函数
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  }
})
```
:::tip
`defineProps()` 宏中的参数不可以访问 `<script setup>` 中定义的其他变量，因为在编译时整个表达式都会被移到外部的函数中。
:::
如果使用了基于类型的 prop 声明 ，Vue 会尽最大努力在运行时按照 prop 的类型标注进行编译。举例来说，`defineProps<{ msg: string }>` 会被编译为 `{ msg: { type: String, required: true }}`。
### Boolean 类型转换
为了更贴近原生 boolean attributes 的行为，声明为 `Boolean` 类型的 props 有特别的类型转换规则。以带有如下声明的 `<MyComponent>` 组件为例：
```vue-html
<!-- 等同于传入 :disabled="true" -->
<MyComponent disabled />

<!-- 等同于传入 :disabled="false" -->
<MyComponent />
```
## 事件
### 声明触发的事件
组件要触发的事件可以显式地通过 `defineEmits()` 宏来声明：
```vue
<script setup>
defineEmits(['inFocus', 'submit'])
</script>
```
我们在 `<template>` 中使用的 `$emit` 方法不能在组件的 `<script setup>` 部分中使用，但 `defineEmits()` 会返回一个相同作用的函数供我们使用：
```vue
<script setup>
const emit = defineEmits(['inFocus', 'submit'])

function buttonClick() {
  emit('submit')
}
</script>
```
`defineEmits()` 宏不能在子函数中使用。如上所示，它必须直接放置在 `<script setup>` 的顶级作用域下。

如果你显式地使用了 `setup` 函数而不是 `<script setup>`，则事件需要通过 `emits` 选项来定义，`emit` 函数也被暴露在 `setup()` 的上下文对象上：
```js
export default {
  emits: ['inFocus', 'submit'],
  setup(props, ctx) {
    ctx.emit('submit')
  }
}
```
```js
export default {
  emits: ['inFocus', 'submit'],
  setup(props, { emit }) {
    emit('submit')
  }
}
```
这个 `emits` 选项还支持对象语法，它允许我们对触发事件的参数进行验证：
```vue
<script setup>
const emit = defineEmits({
  submit(payload) {
    // 通过返回值为 `true` 还是为 `false` 来判断
    // 验证是否通过
  }
})
</script>
```
如果你正在搭配 TypeScript 使用 `<script setup>`，也可以使用纯类型标注来声明触发的事件：
```vue
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>
```
### 事件校验
要为事件添加校验，那么事件可以被赋值为一个函数，接受的参数就是抛出事件时传入 `emit` 的内容，返回一个布尔值来表明事件是否合法。
```vue
<script setup>
const emit = defineEmits({
  // 没有校验
  click: null,

  // 校验 submit 事件
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
})

function submitForm(email, password) {
  emit('submit', { email, password })
}
</script>
```
### 配合 `v-model` 使用
1. 将内部原生 `input` 元素的 `value attribute` 绑定到 `modelValue prop`
2. 输入新的值时在 `input` 元素上触发 `update:modelValue` 事件
```vue
<!-- CustomInput.vue -->
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```
现在 `v-model` 也可以在这个组件上正常工作了：
```vue-html
<CustomInput v-model="searchText" />
```
另一种在组件内实现 `v-model` 的方式是使用一个可写的，同时具有 `getter` 和 `setter` 的计算属性。`get` 方法需返回 `modelValue prop`，而 `set` 方法需触发相应的事件
```vue
<!-- CustomInput.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="value" />
</template>
```
v-model 的参数
```vue-html
<MyComponent v-model:title="bookTitle" />
```
```vue
<!-- MyComponent.vue -->
<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```
多个 v-model 绑定
```vue-html
<UserName
  v-model:first-name="first"
  v-model:last-name="last"
/>
```
```vue
<script setup>
defineProps({
  firstName: String,
  lastName: String
})

defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```
处理 v-model 修饰符
```vue-html
<MyComponent v-model.capitalize="myText">
```
```vue
<script setup>
const props = defineProps({
	modelValue: String,
	modelModifiers: { default: () => ({}) }
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
	let value = e.target.value
	if (props.modelModifiers.capitalize) {
		value = value.charAt(0).toUpperCase() + value.slice(1)
	}
	emit('update:modelValue', value)
}
</script>

<template>
	<input type="text" :value="modelValue" @input="emitValue" />
</template>
```
## 透传Attributes
“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的 attribute 或者 v-on 事件监听器。最常见的例子就是 `class`、`style` 和 `id`。

当一个组件以单个元素为根作渲染时，透传的 `attribute` 会自动被添加到根元素上。举例来说，假如我们有一个 `<MyButton>` 组件，它的模板长这样：
```vue-html
<!-- <MyButton> 的模板 -->
<button>click me</button>
```
```vue-html
<MyButton class="large" />
```
最后渲染出的 DOM 结果是：
```html
<button class="large">click me</button>
```
这里，`<MyButton>` 并没有将 `class` 声明为一个它所接受的 `prop`，所以 `class` 被视作透传 `attribute`，自动透传到了 `<MyButton>` 的根元素上。
### v-on 监听器继承
同样的规则也适用于 v-on 事件监听器：
### 禁用 Attributes 继承
```vue
<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>

<script setup>
// ...setup 部分逻辑
</script>
```
### 多根节点的 Attributes 继承
如果 `<CustomLayout>` 有下面这样的多根节点模板，由于 Vue 不知道要将 attribute 透传到哪里，所以会抛出一个警告。
```vue-html
<header>...</header>
<main>...</main>
<footer>...</footer>
```
如果 $attrs 被显式绑定，则不会有警告：
```vue-html
<header>...</header>
<main v-bind="$attrs">...</main>
<footer>...</footer>
```
## 插槽
### 插槽内容与出口
举例来说，这里有一个 `<FancyButton>` 组件，可以像这样使用：
```vue-html
<FancyButton>
  Click me! <!-- 插槽内容 -->
</FancyButton>
```
而 `<FancyButton>` 的模板是这样的：
```vue-html
<button class="fancy-btn">
  <slot></slot> <!-- 插槽出口 -->
</button>
```
最终渲染出的 DOM 是这样：
```html
<button class="fancy-btn">Click me!</button>
```
### 渲染作用域
插槽内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的。举例来说：
```vue-html
<span>{{ message }}</span>
<FancyButton>{{ message }}</FancyButton>
```
这里的两个 `{{ message }}` 插值表达式渲染的内容都是一样的。
### 默认内容
```vue-html
<button type="submit">
  <slot>
    Submit <!-- 默认内容 -->
  </slot>
</button>
```
### 具名插槽
```vue-html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```
```vue-html
<BaseLayout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <!-- 隐式的默认插槽 -->
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</BaseLayout>
```
### 作用域插槽
在上面的渲染作用域中我们讨论到，插槽的内容无法访问到子组件的状态。

然而在某些场景下插槽的内容可能想要同时使用父组件域内和子组件域内的数据。要做到这一点，我们需要一种方法来让子组件在渲染时将一部分数据提供给插槽。

我们也确实有办法这么做！可以像对组件传递 props 那样，向一个插槽的出口上传递 attributes：
```vue-html
<!-- <MyComponent> 的模板 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
```
当需要接收插槽 props 时，默认插槽和具名插槽的使用方式有一些小区别。下面我们将先展示默认插槽如何接受 props，通过子组件标签上的 `v-slot` 指令，直接接收到了一个插槽 props 对象：
```vue-html
<MyComponent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>
```
## 依赖注入
### Prop 逐级透传问题
通常情况下，当我们需要从父组件向子组件传递数据时，会使用 `props`。想象一下这样的结构：有一些多层级嵌套的组件，形成了一颗巨大的组件树，
而某个深层的子组件需要一个较远的祖先组件中的部分数据。在这种情况下，如果仅使用 props 则必须将其沿着组件链逐级传递下去，这会非常麻烦：
![img](/img/prop-drilling.png)
`provide` 和 `inject` 可以帮助我们解决这一问题。 [1] 一个父组件相对于其所有的后代组件，会作为依赖提供者。任何后代的组件树，无论层级有多深，都可以注入由父组件提供给整条链路的依赖。
![img](/img/provide-inject.png)
### Provide (提供)
要为组件后代提供数据，需要使用到 `provide()` 函数：
```vue
<script setup>
import { provide } from 'vue'

provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
</script>
```
如果不使用 `<script setup>`，请确保 `provide()` 是在 `setup()` 同步调用的：
```js
import { provide } from 'vue'

export default {
  setup() {
    provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
  }
}
```
`provide()` 函数接收两个参数。第一个参数被称为注入名，可以是一个字符串或是一个 `Symbol`。后代组件会用注入名来查找期望注入的值。一个组件可以多次调用 `provide()`，使用不同的注入名，注入不同的依赖值。
### 应用层 Provide
除了在一个组件中提供依赖，我们还可以在整个应用层面提供依赖：
```js
import { createApp } from 'vue'

const app = createApp({})

app.provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
```
在应用级别提供的数据在该应用内的所有组件中都可以注入。这在你编写`插件`时会特别有用，因为插件一般都不会使用组件形式来提供值。
### Inject (注入)
要注入上层组件提供的数据，需使用 `inject()` 函数：
```vue
<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>
```
同样的，如果没有使用 `<script setup>`，`inject()` 需要在 `setup()` 内同步调用：
```js
import { inject } from 'vue'

export default {
  setup() {
    const message = inject('message')
    return { message }
  }
}
```
默认情况下，`inject`假设传入的注入名会被某个祖先链上的组件提供。如果该注入名的确没有任何组件提供，则会抛出一个运行时警告。

如果在注入一个值时不要求必须有提供者，那么我们应该声明一个默认值，和 props 类似：
```js
// 如果没有祖先组件提供 "message"
// `value` 会是 "这是默认值"
const value = inject('message', '这是默认值')
```
在一些场景中，默认值可能需要通过调用一个函数或初始化一个类来取得。为了避免在用不到默认值的情况下进行不必要的计算或产生副作用，我们可以使用工厂函数来创建默认值：
```js
const value = inject('key', () => new ExpensiveClass())
```
### 和响应式数据配合使用
当提供 / 注入响应式的数据时，建议尽可能将任何对响应式状态的变更都保持在供给方组件中。这样可以确保所提供状态的声明和变更操作都内聚在同一个组件内，使其更容易维护。

有的时候，我们可能需要在注入方组件中更改数据。在这种情况下，我们推荐在供给方组件内声明并提供一个更改数据的方法函数：
```vue
<!-- 在供给方组件内 -->
<script setup>
import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>
```
```vue
<!-- 在注入方组件 -->
<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
```
最后，如果你想确保提供的数据不能被注入方的组件更改，你可以使用 `readonly()` 来包装提供的值。
```vue
<script setup>
import { ref, provide, readonly } from 'vue'

const count = ref(0)
provide('read-only-count', readonly(count))
</script>
```
### 使用 Symbol 作注入名
至此，我们已经了解了如何使用字符串作为注入名。但如果你正在构建大型的应用，包含非常多的依赖提供，或者你正在编写提供给其他开发者使用的组件库，建议最好使用 Symbol 来作为注入名以避免潜在的冲突。

我们通常推荐在一个单独的文件中导出这些注入名 Symbol：
```js
// keys.js
export const myInjectionKey = Symbol()
```
```js
// 在供给方组件中
import { provide } from 'vue'
import { myInjectionKey } from './keys.js'

provide(myInjectionKey, { /*
  要提供的数据
*/ });
```
```js
// 注入方组件
import { inject } from 'vue'
import { myInjectionKey } from './keys.js'

const injected = inject(myInjectionKey)
```
## 异步组件
在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。Vue 提供了 defineAsyncComponent 方法来实现此功能：
```js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // ...从服务器获取组件
    resolve(/* 获取到的组件 */)
  })
})
// ... 像使用其他一般组件一样使用 `AsyncComp`
```
ES 模块动态导入也会返回一个 Promise，所以多数情况下我们会将它和 `defineAsyncComponent` 搭配使用。
类似 Vite 和 Webpack 这样的构建工具也支持此语法 (并且会将它们作为打包时的代码分割点)，因此我们也可以用它来导入 Vue 单文件组件
```js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)
```
异步操作不可避免地会涉及到加载和错误状态，因此 defineAsyncComponent() 也支持在高级选项中处理这些状态：
```js
const AsyncComp = defineAsyncComponent({
  // 加载函数
  loader: () => import('./Foo.vue'),

  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 200,

  // 加载失败后展示的组件
  errorComponent: ErrorComponent,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
})
```
如果提供了一个加载组件，它将在内部组件加载时先行显示。在加载组件显示之前有一个默认的 200ms 延迟——这是因为在网络状况较好时，加载完成得很快，加载组件和最终组件之间的替换太快可能产生闪烁，反而影响用户感受。

如果提供了一个报错组件，则它会在加载器函数返回的 Promise 抛错时被渲染。你还可以指定一个超时时间，在请求耗时超过指定时间时也会渲染报错组件。
