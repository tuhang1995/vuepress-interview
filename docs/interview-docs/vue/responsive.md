---
sidebar: auto
sidebarDepth: 3 # 根据页面标题自动生成的侧边栏的最大深度
---
## vue的设计核心思想
除了`组件化`，Vue.js 另一个核心设计思想就是`响应式`。它的本质是当数据变化后会自动执行某个函数，映射到组件的实现就是，当数据变化后，会自动触发组件的重新渲染。响应式是 Vue.js 组件化更新渲染的一个核心机制。

### vue2.x响应式原理
它在内部通过 __Object.defineProperty__ API 劫持数据的变化，在数据被访问的时候收集依赖，然后在数据被修改的时候通知依赖更新。
* Watcher 就是依赖，有专门针对组件渲染的 `render watcher`
1. 首先是依赖收集流程，组件在 render 的时候会访问模板中的数据，触发 `getter` 把 render watcher 作为依赖收集，并和数据建立联系；
2. 派发通知流程，当对这些数据修改的时候，会触发 `setter`，通知 `watcher`, 视图改变


__Object.defineProperty缺陷__
1. 无法监控到 __数组__ 下标的变化, 导致通过数组下标添加元素，无法实时响应
2. 只能劫持对象的属性, 从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历

### vue3.x响应式原理

为了解决Object.defineProperty缺陷, 使用Proxy API重写了响应式, 并独立维护和发布整个 reactivity 库。
reactive() 把数据变成了响应式

* get函数 (依赖收集)
  1. 对特殊的key做处理
  2. 通过Reflect.get 方法求值
  3. 执行track 函数收集依赖
  4. 对计算的res进行判断, 如果它也是数组或对象. 则递归执行reactive把res变成响应式对象

  > Object.defineProperty 是在初始化阶段，即定义劫持对象的时候就已经递归执行了，而 Proxy 是在对象属性被访问的时候才递归执行下一步 reactive，这其实是一种延时定义子对象响应式的实现，在性能上会有较大的提升
* set函数 (派发通知)
  1. 通过Reflect.set 求值
  2. 通过trigger 函数派发通知 (最核心), 并依据 key 是否存在于 target 上来确定通知类型，即新增还是修改

* trigger 函数

  1. 通过 targetMap 拿到 target 对应的依赖集合 depsMap；
  2. 创建运行的 effects 集合；
  3. 根据 key 从 depsMap 中找到对应的 effect 添加到 effects 集合；
  4. 遍历 effects 执行相关的副作用函数。

__响应式总结__: 
劫持数据的方式改成用 Proxy 实现, 以及收集的依赖由 watcher 实例变成了组件副作用渲染函数


## vue set如何实现的