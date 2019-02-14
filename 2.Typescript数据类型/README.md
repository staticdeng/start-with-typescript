# Typescript数据类型  

typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验  

## 基础类型

在typescript中主要给我们提供了以下数据类型：

> 布尔类型(boolean)  
> 数字类型(number)  
> 字符串类型(string)  
> 数组类型(array)  
> 元组类型(tuple)  
> 枚举类型(enum)  
> 任意类型(any)  
> null和undefined  
> void类型  
> never类型

相比于js，typescript中多了枚举类型、任意类型、void类型和never类型

## 变量定义  

写ts代码变量必须指定类型，指定类型后赋值必须为指定的类型，否则报错

```js
var flag:boolean = true
flag = 123 // 错误，类型不一致
```

## 数据类型

#### 布尔类型（boolean）

```js
var flag:boolean = true

flag = false // 正确

// flag=123;  // 错误
```

#### 数字类型（number）


```js
var num:number = 123;

num = 456; // 正确 

// num='str';    //错误
```

#### 字符串类型(string)

```js
var str:string = 'this is ts';

str='haha';  //正确

// str=true;  //错误
```

#### 数组类型（array）  ts中定义数组有两种方式

```js
// 第一种
var arr:number[] = [1, 2, 3]

// 第二种
var arr2:Array<number> = [1, 2, 3]
```

#### 元组类型（tuple）元素的类型不必相同，写法和数组一样

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