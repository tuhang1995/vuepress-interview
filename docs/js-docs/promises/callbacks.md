## 回调

添加一个callback函数作为第二个参数, 该函数在脚本加载完成时执行

```javascript

function loadScript(params, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);
  document.head.append(script);
}

// 调用脚本中的函数 就可以写在回调函数中了
loadScript('/my/script.js', function() {
  // 在脚本加载完成后，回调函数才会执行
  // newFunction 在script.js脚本中
  newFunction(); // 现在它工作了
  ...
});
```

### 在回调中回调

* 在每一个新行为 (action)都在回调内部, 这对于单个行为还好, 但对于多个行为来说就不好了

```javascript

loadScript('/my/script.js', function(script) {

  loadScript('/my/script2.js', function(script) {

    loadScript('/my/script3.js', function(script) {
      // ...加载完所有脚本后继续
    });

  });

});

```

### 处理Error

* 跟踪加载错误

```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// 用法
loadScript('/my/script.js', function(error, script) {
  if (error) {
    // 处理 error
  } else {
    // 脚本加载成功
  }
});
```

### 回调地狱

* 它像是一种可行的异步编程方式, 对于一个或两个嵌套的调用看起来还不错
* 但对于一个接一个的多个异步行为, 代码就会变成这样

```javascript
loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...加载完所有脚本后继续 (*)
          }
        });

      }
    });
  }
});

```
::: tip 

避免地狱回调的方法, 就是使用 `promise`

:::