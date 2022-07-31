---
sidebar: auto
sidebarDepth: 3 # 根据页面标题自动生成的侧边栏的最大深度
#collapsible: true
# prev:
#   text: GitHub
#   link: https://github.com
# next:
#   text: GitHub
#   link: https://github.com
---
# JavaScript
## js的数据类型
* 基本类型
  - `Number` `String` `Boolean` `Symbol` `Undefined` `Null`
* 引用类型
  - `Object` `Array` `Function` `RegExp` `Date`
--- 
### 类型判断
* 基本类型
  - 使用 `typeof`

```javascript
typeof 3.14; // Number
typeof false // boolean
typeof [1,2,3,4] // object
```

 - 使用 `instanceof`

  - __instanceof 不能检查 字面量声明的 Number, String, Boolean__
  - __但是可以检查`构造函数`声明的__

```javascript
// 字面量声明
let num1 = 123;
// 构造函数声明
let num2 = new Number(123)

num1 instanceof Number; // false
num2 instanceof Number; // true
100 instanceof Number, // false
null instanceof Object, //false
[1,2,3] instanceof Array, //true
{a:1,b:2,c:3} instanceof Object, //true

```
- 使用 `constructor`
  - __constructor是`prototype`对象上的属性, 指向构造函数, 若对象上没有实例属性或方法, 就去原型链上寻找__

  ```javascript
  new Number(111).constructor == Number; // true
  let num = 12;
  let str = 'tuhang';
  let bool = true;
  let arr = [1,2,3,4];
  let json = { name:'tuhang', age:25 };
  let func = function(){ console.log('this is function'); }
  let und  = undefined;
  let nul  = null;
  let date = new Date();
  let reg  = /^[a-zA-Z]{5,20}$/;
  let error= new Error();
  class Person{}
  let tom = new Person();

  // 一个对象是否属于某个类
  console.log(tom.constructor==Person) // true
  Person.prototype.constructor === Person // true

  console.log(num.constructor==Number) // true
  console.log(str.constructor==String) // true
  console.log(bool.constructor==Boolean) // true
  console.log(arr.constructor==Array) // true
  console.log(json.constructor==Object) // true
  console.log(func.constructor==Function) // true
  console.log(date.constructor==Date) // true
  console.log(reg.constructor==RegExp) // true
  console.log(error.constructor==Error)
  ```


- 使用Object.prototype.toString.call() 检测对象属性
  - 可以通过 `toString()`来获取每个对象的类型
  ```javascript
  let toString = Object.prototype.toString;

  toString.call(123); //"[object Number]"
  toString.call('abcdef'); //"[object String]"
  toString.call(true); //"[object Boolean]"
  toString.call([1, 2, 3, 4]); //"[object Array]"
  toString.call({name:'wenzi', age:25}); //"[object Object]"
  toString.call(function(){ console.log('this is function'); }); //"[object Function]"
  toString.call(undefined); //"[object Undefined]"
  toString.call(null); //"[object Null]"
  toString.call(new Date()); //"[object Date]"
  toString.call(/^[a-zA-Z]{5,20}$/); //"[object RegExp]"
  toString.call(new Error()); //"[object Error]"
  ```

## 防抖函数
__触发事件后函数不会立即执行，而是在停止事件触发后 n 毫秒后执行，如果在 n 毫秒内又触发了事件，则会重新计时__
* __使用场景__
1. 输入框中频繁的输入内容, 搜索或者提交信息
2. 频繁的点击按钮, 触发某个事件
3. 监听浏览器滚动事件, 完成某些特定的操作
4. 用户缩放浏览器的resize事件

```javascript
    function debounce(fn, delay) {
      // 定义一个空的变量
      let timer = null;
      // 返回一个函数
      return function(){
          // 判断timer是否为空
          if (timer) {
              // 如果不为空，则清除定时器timer
              clearTimeout(timer);
          }
          // 给timer赋值一个定时器
          timer = setTimeout(() => {
              // 执行fn函数，改变函数的this指向，并传递参数
              fn.apply(this, arguments)
          }, delay);
      }
  } 
```

## 节流函数

__无论用户触发事件多少次，附加的函数在给定的时间间隔内只会执行一次。（即：回调函数在规定时间内最多执行一次__

* __使用场景__
1. 监听页面的滚动事件
2. 鼠标移动事件
3. 用户频繁点击操作
4. 游戏中的一些设计...

## 事件循环

## js执行机制

## 微任务

## 缓存

## promise的应用场景

## 提高页面性能做了什么


## reduce实现数组去重
```javascript
const arr = [1,2,3,4,5,6,5,4];
// reduce语法
// arr.reduce((prev, cur, index, arr) => {}, init)
// prev 上次调用回调的返回值
// cur 当前处理的数组元素
// index 当前处理元素的索引
// arr 原数组
// init 表示初始值 如果不传 为数组第一个值
const arr2 = arr.reduce((prev, current)=> {
  if(prev.indexOf(current) === -1) {
    prev.push(current)
  }
  return prev
}, []);

// arr2 [1,2,3,4,5,6]

// reduce 实现数组求和

const arr3 = arr.reduce((prev, cur) => {
  return prev + cur
}, 0)
```

