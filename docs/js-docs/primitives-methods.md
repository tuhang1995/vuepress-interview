## 数字类型


### 测试: isFinite 和 isNaN
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