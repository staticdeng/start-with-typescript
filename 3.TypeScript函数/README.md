# TypeScript函数  

内容概述： 函数的定义、可选参数、默认参数、剩余参数、函数重载、箭头函数。

## 函数的定义

语法：

```js
// 函数声明
function fn(x: Type, y: Type): Type {}

// 函数表达式
var fn = (x: Type, y: Type): Type => {}

// 函数表达式：指定变量fn的类型
var fn: (x: Type, y: Type) => Type = (x, y) => {}
```

* 定义函数有函数声明和函数表达式两种形式。定义函数的参数和返回值可以指定其类型；当调用函数时，传入参数类型必须与定义函数参数类型保持一致。

```js
// 函数声明法
function run(x: number, y: number): number {
    return x + y;
}

// 函数表达式法
var run2 = (x: number, y: number): string => {
    return 'run2'
}

run(1, 2);
run2(1, 2);
```
这段代码中，函数run和run2指定了参数类型，调用时传入参数类型必须保持一致。

* 函数表达式法另外一种写法

```js
var run3: (x: number, y: number) => string = function(x: number, y: number): string{
    return 'run3';
}
run3(1, 2);
```
当给变量run3指定类型的时候，应该是函数的参数和返回值的约束类型。如果用后面学到的[ts类型推论](./7.TypeScript类型推论/)，可以简写为：

```js
var run4: (x: number, y: number) => string = function(x, y){ // 类型推论可以确定函数的参数和返回值类型，也就可以省略类型指定
    return 'run4';
}
run4(1, 2);
```

* 函数没有返回值用void类型指定返回值类型

```js
function voidFnc(): void{
    console.log('没有返回值的方法用void')
}
voidFnc();
```

## 可选参数

* es5里面方法的实参和行参可以不一样，但是ts中必须一样，如果不一样就需要在可选参数后加?，这就是可选参数。

```js
function electParam(name:string, age?:number):string {
    // 这里的age可传可不传，age就是可选参数
    if(age){
        return `${name} --- ${age}`
    }else{
        return `${name} --- 年龄保密`
    }
}
console.log('可选参数', electParam('dz'))

// 注意: 可选参数必须配置到参数的最后面

// 错误写法：可选参数不在最后面
// function electParam2(name?: string, age: number): string {
//     ...
// }
```

## 默认参数

* es5里面没法设置默认参数，es6和ts中都可以设置默认参数

```js
// age为默认参数
function defaultParam(name:string, age:number = 20):String {
    return `${name} --- ${age}`
}

console.log('默认参数', defaultParam('dz'))
```

## 剩余参数

* 当有很多参数时候或参数个数不确定，可以用三点运算符

```js
// sum参数传过来的是一个数组
function sum(...result: number[]): number {
    var sum = 0;

    for (var i = 0; i < result.length; i++) {

        sum += result[i];
    }

    return sum;
}
console.log('剩余参数', sum(1, 2, 3, 4, 5, 6));

// a=1 b=2 其他参数为剩余参数
function sum2(a: number, b: number, ...result: number[]): number {
    var sum = a * b;

    for (var i = 0; i < result.length; i++) {

        sum += result[i];
    }

    return sum;
}
console.log('剩余参数2', sum2(1, 2, 3, 4, 5, 6));
```

## 函数重载

> 同名函数，传入不同的参数，实现不同的功能，这就叫作函数重载。

 * java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
 * typescript中的重载：通过为同一个函数提供多个函数类型定义来实现多种功能的目的。
 * ts为了兼容es5以及es6，重载的写法和java中有区别。
 
es5中同名函数，后面会覆盖前面的函数，ts中则不会：

```js
function overloadingFn(x: number, y: number): number;
function overloadingFn(x: string, y: string): string;

// 上面定义函数的格式，下面定义函数的具体实现
function overloadingFn(x: any, y: any): any {
    return x + y;
}

overloadingFn(1, 2);
overloadingFn('a', 'b');
```
这段代码中，同名函数overloadingFn首先定义两个函数的格式，然后再去实现功能，原来要传入不同类型参数要用多个函数实现，现在可以用同名函数来实现，这就是函数重载。

## 箭头函数

箭头函数和es6中一样  

```js
setTimeout(() => {
    console.log('箭头函数')
}, 1000);
```

例子中的[源代码](./index.ts)