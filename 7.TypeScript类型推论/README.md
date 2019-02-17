# TypesSript类型推论

有的时候不一定需要强制使用类型声明，在有些没有明确指出类型的地方，ts类型推论会帮助提供类型。

内容概述：变量初始化类型推论、上下文类型推论。

## 变量初始化

ts会根据变量初始化的时候赋予的值进行类型推断。

```ts
let a = '类型推论';
// a = true; // Type 'true' is not assignable to type 'string'
```
上面代码中，a初始化没有指定类型，ts会推论出a的类型为string，当a = true重新赋值的时候类型不匹配会报相应错误，vscode编译器会提示错误。

## 上下文推断

ts也会根据上下文进行类型的推断，比如在事件函数中，函数的第一个参数会根据当前绑定的事件类型推断处理事件对象。

```ts
document.onkeydown = function(e) {
    // console.log(e.button);  //<- Error Property 'button' does not exist on type 'KeyboardEvent'
};
```
这个例子会得到一个类型错误，ts类型检查器根据当前绑定的事件类onkeydown自动推导e的类型为KeyboardEvent，vscode编译器里鼠标放上去就有e推导出来的类型（e:KeyboardEvent）

例子中的[源代码](./index.ts)