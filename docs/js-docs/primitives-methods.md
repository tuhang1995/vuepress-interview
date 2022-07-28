---
sidebar: auto
sidebarDepth: 5
prev:
  text: GitHub
  link: https://github.com
next:
  text: GitHub
  link: https://github.com
---
# 数字类型

## 舍入
  * Math.floor
    - 向下舍入: 3.2 => 3, -1.1 => -2
  * Math.ceil
    - 向上舍入: 3.1 => 4, -1.1 => -1
  * Math.round
    - 向最近的整数舍入: 3.1 => 3, 3.6 => 4, 中间值 3.5 => 4
  * Math.trunc(ie 不支持)
    - 移除小数点后的所有内容而没有舍入: 3.1 => 3, -1.1 => -1

差异表格
|  | Math.floor | Math.ceil | Math.round | Math.trunc
| --- | --- | --- | --- |  --- |
| 3.1 | 3 | 4 | 3 | 3 | 
| 3.6 | 3 | 4 | 4 | 3 | 
| -1.1| -2 | -1 | -1 | -1 |
| -1.6| -2 | -1  | -2 | -1 |

## 不精确的计算
 * 在内部，数字是以 64 位格式 [IEEE-754](http://en.wikipedia.org/wiki/IEEE_754)  表示的，所以正好有 64 位可以存储一个数字：其中 52 位被用于存储这些数字，其中 11 位用于存储小数点的位置，而 1 位用于符号
 * 如果一个数字真的很大, 则会溢出64位存储, 变成一个特殊的值Infinity

 ```javascript
 alert(0.1 + 0.2 == 0.3); // false 

 alert(0.1 + 0.2); // 0.30000000000000004
 ```

产生的原因:
-  一个数字以其二进制的形式存储在内存中，一个 1 和 0 的序列。但是在十进制数字系统中看起来很简单的 0.1，0.2 这样的小数，实际上在二进制形式中是无限循环小数。
- 使用二进制数字系统无法 `精确` 存储 _0.1_ 或 _0.2_
- IEEE-754 数字格式通过将数字舍入到最接近的可能数字来解决此问题, 这些舍入规则通常不允许我们看到“极小的精度损失”，但是它确实存在。

解决方式:
* 使用 [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 对 结果进行舍入

```javascript
let sum = 0.1 + 0.2;
sun.toFixed(2); // " 0.30"

// toFixed返回一个字符串, 如果toFixed位数不够, 会自动补0
console.log(+sun.toFixed(2)); // 准换为数字
```

* 将数字临时乘以100 (或更大的数字), 将其转换为整数, 进行数学运算, 在除回, 误差会有所减少, 但是不会完全消除

```javascript
alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001
```

## 测试: isFinite 和 isNaN
- Infinity 和 -Infinity 是一个特殊的数值, 比任何值都大 (小)
- NaN 代表一个 error

他们属于 `number` 类型, 但不是 '普通' 数字, 

* isNaN(value) 将其转换为数字, 然后测试它是否为NaN

```javascript
isNaN(NaN); //true
isNaN('str'); // true
```

`NaN`的值是独一无二的, 它不等于任何东西, 包括它本身
```javascript
console.log(NaN === NaN) // false
```
* isFinite(value) 将其转换为数字, 如果是常规数字而不是 NaN/Infinity/-Infinity，则返回 true

```javascript
isFinite('15'); // true
isFinite('str'); // false  因为是一个特殊的值：NaN
isFinite(Infinity) // false，因为是一个特殊的值：Infinity
```

* 有时 `isFinite` 被用于验证字符串值是否为常规数字

```javascript
let num = +prompt("Enter a number", '');

// 结果会是 true，除非你输入的是 Infinity、-Infinity 或不是数字
alert( isFinite(num) );
```

::: tip 

在所有数字函数中, 包括`isFinite`, 空字符串或仅有空格的字符串均被视为 `0`

:::

## parseInt 和 parseFloat

使用加号 `+` 或 `Number()` 的数字转换是严格的, 如果一个值不完全是一个数字, 就会失败

```javascript
alert(+ '100px'); // NaN
```

parseInt 和 parseFloat 可以从字符串中 '读取'数字, 直到无法读取为止
```javascript
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12，只有整数部分被返回了
alert( parseFloat('12.3.4') ); // 12.3，在第二个点出停止了读取

//某些情况下, parseInt和parseFloat会返回NaN, 当没有数字可读时

alert(parseInt('a123'))
```

### parseInt(str, radix)的第二个参数
`parseInt()` 的第二个参数. 指定了数字系统的基数. 因此还可以解析十六进制数字、二进制数字等的字符串：
```javascript
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255，没有 0x 仍然有效

alert( parseInt('2n9c', 36) ); // 123456
```

## 其他数学函数

* Math.random()
  - 返回一个从 0 到 1的随机数 (不包括1)

* Math.max(a, b, c...) 和 Math.min(a, b, c...)
  - 从任意数量的参数中返回最大值和最小值
  - Math.max(3, 5, -10); // 5

* Math.pow(n, power)
  - 返回n的给定(power) 次幂

## 总结
  * 要写很多零的数字
    - 将 `e` 和 0的数量附加到数字后, 就像: 123e6 与 123 后面接6个0相同
    - `e` 后面的负数将使数字除以 1 后面接着给定数量的零的数字。例如 123e-6 表示 0.000123（123 的百万分之一）
  * 对于不同的数字系统
    - 可以直接在十六进制（0x），八进制（0o）和二进制（0b）系统中写入数字。
    - `parseInt(str，base)` 将字符串 str 解析为在给定的 base 数字系统中的整数，2 ≤ base ≤ 36。
    - `num.toString(base)` 将数字转换为在给定的 base 数字系统中的字符串。
  * 对于常规数字检查
    - `isNaN(value)` 将其参数转换为数字，然后检测它是否为 NaN
    - `isFinite(value)` 将其参数转换为数字，如果它是常规数字，则返回 true，而不是 NaN/Infinity/-Infinity

    要将 `12pt` 和 `100px`之类的值转换为数字
    - 使用 parseInt/parseFloat 进行“软”转换，它从字符串中读取数字，然后返回在发生 error 前可以读取到的值。
  * 小数
    - Math.round 和 toFixed 都将数字舍入到最接近的数字
    - 使用 Math.floor，Math.ceil，Math.trunc，Math.round 或 num.toFixed(precision) 进行舍入。
    - 请确保记住使用小数时会损失精度。

## 任务

### 为什么6.35.toFixed(1) == 6.3
```javascript{7-9,13}
alert(1.35.toFixed(1)); // 1.4

alert(6.35.toFixed(1)); // 6.3

// 为什么没有转换为6.4

/* 解决方案
  `6.35` 的小数部分是一个无限的二进制, 它的存储会造成精度损失
*/
alert( 6.35.toFixed(20) ); // 6.34999999999999964473
alert( 1.35.toFixed(20) ); // 1.35000000000000008882

// 在舍入前, 应该让其接近整数
alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000

// 63.5完全没有精度损失
alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
```



### 从min到max的随机数
Math.random() 会创建一个 0 到 1 之间(不包括1)的随机数
```javascript
  function random(min, max) {
    return min + Math.random() * (max - min)
  }
```