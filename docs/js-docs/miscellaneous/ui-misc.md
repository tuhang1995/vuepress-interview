
# 宏任务和微任务

1. 从 __宏任务__ 队列 (例如`script`)中出队 并执行最早的任务
2. 执行所有的 __微任务__
  - 当微任务队列非空时
    - 执行最早的微任务
3. 如果有变更, 则将变更渲染出来
4. 如果宏任务队列为空, 则休眠直到出现宏任务
5. 转到步骤1

安排一个新的宏任务
* 使用零延迟的 `setTimeout(f)`

| 宏任务 | 微任务 |
| --| -- |
| setTimeout| promise.then |
| setInterval | process.nextTick |
| js主代码 | - |

1. new Promise会立即执行(new 是时候是同步的)
2. .then是微任务 所以new Promise中的代码执行后 执行完全部宏任务 才会在执行微任务 就是.then
3. 如果在当前宏任务中创建了微任务, 先执行外部的微任务, 在执行里面的微任务


__看看实际输出__
```javascript
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
```

__结果解析:__
```javascript
console.log(1);
// 第一行立即执行，它输出 `1`。
// 到目前为止，宏任务队列和微任务队列都是空的。

setTimeout(() => console.log(2));
// `setTimeout` 将回调添加到宏任务队列。
// - 宏任务队列中的内容：
//   `console.log(2)`

Promise.resolve().then(() => console.log(3));
// 将回调添加到微任务队列。
// - 微任务队列中的内容：
//   `console.log(3)`

Promise.resolve().then(() => setTimeout(() => console.log(4)));
// 带有 `setTimeout(...4)` 的回调被附加到微任务队列。
// - 微任务队列中的内容：
//   `console.log(3); setTimeout(...4)`

Promise.resolve().then(() => console.log(5));
// 回调被添加到微任务队列
// - 微任务队列中的内容：
//   `console.log(3); setTimeout(...4); console.log(5)`

setTimeout(() => console.log(6));
// `setTimeout` 将回调添加到宏任务队列
// - 宏任务队列中的内容：
//   `console.log(2); console.log(6)`

console.log(7);
// 立即输出 7

// 最终结果为: 1 7 3 5 2 6 4

/* 总结一下: 
1. 立即输出数字 1 和 7，因为简单的 console.log 调用没有使用任何队列。
2. 然后，主代码流程执行完成后，开始执行微任务队列。
  其中有命令行：console.log(3); setTimeout(...4); console.log(5)。
  输出数字 3 和 5，setTimeout(() => console.log(4)) 将 console.log(4) 调用添加到了宏任务队列的尾部。
  现在宏任务队列中有：console.log(2); console.log(6); console.log(4)。
3. 当微任务队列为空后，开始执行宏任务队列。并输出 2、6 和 4。
*/
```

