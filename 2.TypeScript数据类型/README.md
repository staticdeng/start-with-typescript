# TypeScript数据类型  

typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验（类型声明）  

## 基础类型

在typescript中主要给我们提供了以下数据类型：

* 字符串类型(string)
* 数字类型(number)
* 布尔类型(boolean)
* null和undefined
* 数组类型(array)
* 元组类型(tuple)
* 枚举类型(enum)
* 任意类型(any)
* void类型
* never类型

相比于js的数据类型，typescript中多了元组类型、枚举类型、任意类型、void类型和never类型。当然这些只是基础类型，还有更多其他类型，后面的[类型推论](./7.TypeScript类型推论/)和[高级类型](./8.TypeScript高级类型/)可以进一步了解。

## 变量定义  

写ts代码变量可以指定其类型，指定类型后赋值必须为指定的类型，否则报错。

* 如果没有指定类型，ts类型推论会帮助提供类型，请看[ts类型推论](./7.TypeScript类型推论/)。

```js
var flag:boolean = true
flag = 123 // 错误，类型不一致
```

## 数据类型

#### 字符串类型(string)

```js
var str:string = 'this is ts';

str='haha';  //正确

// str=true;  //错误
```
#### 数字类型（number）

```js
var num:number = 123;

num = 456; // 正确 

// num='str';    //错误
```

#### 布尔类型（boolean）

```js
var flag:boolean = true

flag = false // 正确

// flag=123;  // 错误
```

#### null 和 undefined

undefined：

```js
{
    // 在js中，变量已声明但未初始化为undefined
    var undefinedTest:number
    // console.log(undefinedTest) // 错误写法，typescript报错，赋值了才正确

    // 在typescript中，已声明未初始化的值要直接访问的话类型需要定义为undefined
    var undefinedTest2:undefined
    console.log(undefinedTest2) // 正确写法，输出undefined 
}
{
    // 可能是number类型 可能是undefined
    var undefinedTest3:number | undefined;
    console.log(num);
}
```

null:  

```js
// null是一个空指针对象，undefined是未初始化的变量。因此，可以把undefined看作是空的变量，而null看作是空的对象
var nullTest:null
nullTest = null
// nullTest = {} // 错误，定义了类型是null，值必须为null
```

#### 数组类型（array）

ts有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：

```js
// 第一种
var arr:number[] = [1, 2, 3]
```

第二种方式是使用数组泛型，Array<元素类型>：
```js
// 第二种
var arr2:Array<number> = [1, 2, 3]
```

#### 元组类型（tuple）

和数组类似，元素的类型不一样：

```js
let arr:[number,string] = [123,'this is ts']
```

#### 枚举类型（enum）

用法：

	enum 枚举名{ 
	    标识符[=整型常数], 
	    标识符[=整型常数], 
	    ... 
	    标识符[=整型常数], 
	}

```js
enum Flag {success = 1,error = 2};

let s:Flag = Flag.success // 使用枚举类型中的值
console.log('正确状态',s)
let f:Flag = Flag.error
console.log('错误状态',f)
```

#### 任意类型（any）

为那些在编程阶段还不清楚类型的变量指定一个类型

```js
var number:any = 123
number = 'str'
number = true
```

#### void类型

typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。

```js
// 表示方法没有返回任何类型
function run(): void {
    console.log('run')
}

run()
```

#### never类型

> 表示的是那些永不存在的值的类型，例如异常  

```js
var a:never

// a = 123 //错误写法
a = (() => {
    throw new Error('错误');
})()
```

例子中的[源代码](./index.ts)