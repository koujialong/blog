# vue数据响应式原理

## 简略代码
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<input id="myInput"/>
<div id="info"></div>
<button id="add">+1</button>
<script>
    const Vue = (function () {
        let uuid = 0;

        /**
         * 依赖收集器
         */
        class Dep {
            constructor() {
                this.uuid = ++uuid;
                // 存储订阅者
                this.subs = [];
            }

            // 构建订阅关系
            depend() {
                Dep.target.addSub(this);
            }
            
            // 关联订阅者
            addSub(watch) {
                this.subs.push(watch);
            }

            // 通知订阅者更新
            notify() {
                this.subs.forEach((sub) => sub.update());
            }
        }

        Dep.target = null;

        /**
         * 数据响应式
         */
        class Observer {
            constructor(val) {
                this.val = val;
                this.walk(val);
            }

            /**
             * 扫描data并劫持
             * @param val
             */
            walk(val) {
                Object.keys(val).forEach((key) => defineReactive(val, key, val[key]));
            }
        }

        /**
         * 劫持属性，实现响应式
         * @param obj 被劫持对象
         * @param key 属性名
         * @param val 属性值
         */
        function defineReactive(obj, key, val) {
            // 对属性值继续响应式处理
            let chlidOb = observe(val);
            // 创建观察者
            const dep = new Dep();
            // 劫持属性
            Object.defineProperty(obj, key, {
                enumerable: true,
                configurable: true,
                get: () => {
                    // Dep.target为当前watcher对象
                    if (Dep.target) {
                        // 构建watcher对象和dp关系
                        dep.depend();
                    }
                    return val;
                },
                set: (newVal) => {
                    if (val === newVal) {
                        return
                    }
                    val = newVal;
                    // 更新响应式数据
                    chlidOb = observe(newVal);
                    // 通知watcher更新UI
                    dep.notify();
                },
            });
        }

        /**
         * 响应式数据
         * @param val
         * @returns {Observer}
         */
        function observe(val) {
            // 如果数据不是引用类型则不继续响应
            if (!val || typeof val !== "object") {
                return;
            }
            return new Observer(val);
        }

        /**
         * 订阅者
         */
        class Watcher {
            /**
             * 构造函数
             * @param expOrFun 订阅的属性
             * @param vm vue实例
             * @param cb UI回调函数
             */
            constructor(expOrFun, vm, cb) {
                this.expOrFun = expOrFun;
                this.vm = vm;
                this.cb = cb;
                // 存储订阅者
                this.sub = {};
                // 获取属性值,创建dep和watcher的依赖关系
                this.val = this.get()
            }

            update() {
                this.run();
            }

            // 添加依赖收集器
            addSub(dep) {
                if (!this.sub[dep.uuid]) {
                    this.sub[dep.uuid] = dep;
                    // 依赖收集器关联watcher
                    dep.addSub(this);
                }
            }

            run() {
                const val = this.get();
                if (val !== this.val) {
                    this.val = val;
                    // 更新UI
                    this.cb.call(this.vm, val);
                }
            }

            get() {
                // 订阅者静态属性挂载watcher
                Dep.target = this;
                // 获得值并触发订阅
                const val = this.vm._data[this.expOrFun];
                Dep.target = null;
                return val;
            }
        }

        class Vue {
            constructor(options = {}) {
                this.$options = options;
                // 将options的数据挂载到vm._data上
                let data = (this._data = this.$options.data);
                // 代理属性
                Object.keys(data).forEach((key) => this._proxy(key));
                // 响应式options.data
                observe(data)
            }

            /**
             * 语法糖代理属性 将vm._data的属性代理到vm上，用户vm.xx调用
             * @param key
             * @private
             */
            _proxy(key) {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: true,
                    get: () => this._data[key],
                    set: (val) => this._data[key] = val
                });
            }

            /**
             * 暴露watcher构造器
             * @param expOrFn 订阅的属性
             * @param cb 订阅回调
             */
            $watch(expOrFn, cb) {
                // 创建watcher对象
                new Watcher(expOrFn, this, cb)
            }
        }

        return Vue;
    })();

    // 申明vue实例
    const vm = new Vue({
        data: {
            text: 0,
        },
    });
    const dom = document.getElementById('info')
    document.getElementById('myInput').addEventListener('keyup', (e) => {
        vm.text = e.target.value
    })
    // 模拟模版解析后的数据订阅,创建watcher对象
    vm.$watch('text', (val) => {
        //vdom diff 之后挂载
        dom.innerHTML = val
    })
    document.getElementById('add').addEventListener('click', (e) => {
        vm.text = vm.text + 1
    })
</script>
</body>

</html>
```
