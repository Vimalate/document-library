# 前端模块化：CommonJS,AMD,CMD,ES6

## CommonJS:

CommonJS规范为CommonJS小组所提出，目的是弥补JavaScript在服务器端缺少模块化机制，NodeJS、webpack都是基于该规范来实现的。
日常使用时，多用module.exports定义当前模块对外输出的接口，用require加载模块。

**module 变量代表当前模块，这个变量是一个对象.**

**module.exports(即module的exports属性) 是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。```exports=module.exports={Obj}```**

**CommonJS 用法**
```js
//a.js
module.exports = function () {
  console.log("CommonJS")
}

//b.js
var a = require('./a');

a();//"CommonJS"
```
**CommonJS 特点：**
* 所有代码都运行在模块作用域，不会污染全局作用域。
* 模块首次加载，运行结果就被 **缓存** 了，以后再加载，就直接读取缓存结果。如想模块再次运行，必须清除缓存。
* 模块是同步加载的，即只有加载完成，才能执行后面的操作。
## AMD

AMD 采用**异步方式**加载模块，模块的加载不影响它后面语句的运行。允许指定回调函数，所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

```require([module], callback);```

1. [module]，是一个数组，里面的成员就是要加载的模块；

2. callback，加载成功之后的回调函数。

RequireJS实现了AMD规范，所以一般说AMD也是指RequireJS。

**RequireJS的基本用法**

这里我们通过  ```define```  来定义一个模块，使用  ```require```  导入定义的模块

```js
// model.js
// 可以传入三个参数，分别是字符串-模块名、数组-依赖模块、函数-回调函数
define (function(){
  return 1
})
```

```js
// main.js
// 数组中声明需要加载的模块，可以是模块名、js文件路径
require(['model'], function(a){
    console.log(model);// 1
});
AMD 推崇依赖前置、提前执行


## CMD

CMD推崇依赖就近、延迟执行