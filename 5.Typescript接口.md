# TypesSript接口

**接口定义**：接口是对传入参数进行约束；或者对类里面的属性和方法进行声明和约束，实现这个接口的类必须实现该接口里面属性和方法；typescript中的接口用interface关键字定义。  

接口作用：接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

内容概述：接口分类：（属性接口、函数类型接口、可索引接口、类类型接口），接口的继承

### 1. 接口分类

### 1.1 属性接口

> 对传入对象的约束（也就是对json的约束）

在了解接口之前，我们来看看函数传入obj参数

```js

function printLabel(labelInfo: {label:string}){
    return labelInfo
}
// printLabel({name:'obj'});  //错误的写法
console.log(printLabel({label: 'obj'}))

```

和上面类似，由此引入属性接口 => 对方法传入参数进行约束  


下面为属性接口的例子，方法printFullName对传入参数FullName(为对象)进行约束

```js

interface FullName{
    firstName: string; // 注意;结束
    secondName: string;
    age?: number // 接口的可选属性用?
}

function printFullName(name:FullName) {
    // 传入对象必须包含firstName和secondName，可传可不传age
    return name
}
var obj = {
    firstName:'小',
    secondName:'明',
    age: 20
}
console.log(printFullName(obj))

```

**属性接口应用：原生js封装ajax**

```js

interface Config{
    type: string;
    url: string;
    data?: string;
    dataType: string;
}
function ajax(config: Config) {
    var xhr = new XMLHttpRequest
    xhr.open(config.type, config.url, true)
    xhr.send(config.data)
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            if(config.dataType == 'json'){
                console.log(JSON.parse(xhr.responseText))
            }else{
                console.log(xhr.responseText)
            }
        }
    }
}

ajax({
    type: 'get',
    data: 'name=xiaoming',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
})

```

### 1.2 函数类型接口

> 对方法传入的参数以及返回值进行约束

```js

interface encrypt{
    (key: string, value: string): string; // 传入的参数和返回值的类型
}

var md5:encrypt = function(key:string, value:string):string{
    // encrypt对加密方法md5进行约束，同时md5方法的参数和返回值类型和encrypt要保持一致
    return key + value
}

console.log(md5('name', '小明'))

```

### 1.3 可索引接口

> 对索引和传入参数的约束（一般用于对数组、对象的约束）

ts中定义数组：

```js

var arr1:number[] = [1,2]
var arr2:Array<string> = ['1', '2']

```

现在用接口来实现：

```js

// 对数组的的约束
interface UserArr{
    // 索引为number，参数为string
    [index:number]: string
}
var userarr:UserArr = ['a', 'b']
console.log(userarr)

```

```js

// 对象的约束
interface UserObj{
    // 索引为string，参数为string
    [index:string]: string
}
var userobj:UserObj = { name: '小明', sex: '男' }
console.log(userobj)

```

### 1.4 类类型接口

> 对类的约束，和抽象类抽象有点相似

```js

interface Animal{
    // 对类里面的属性和方法进行约束
    name:string;
    eat(str:string):void;
}
// 类实现接口要用implements关键字，必须实现接口里面声明的方法和属性
class Cat implements Animal{
    name:string;
    constructor(name:string){
        this.name = name
    }
    eat(food:string){
        console.log(this.name + '吃' + food)
    }
}
var cat = new Cat('小花')
cat.eat('老鼠')

```

### 2. 接口的继承

> 和类的继承一样，用extends实现接口继承

下面同时实现类的继承和接口的继承

```js

interface Animal {
    eat(): void;
}
// 继承Animal接口，则实现Person接口的类必须也实现Animal接口里面的方法
interface Person extends Animal {
    work(): void;
}

class Programmer {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    coding(code: string) {
        console.log(this.name + code)
    }
}

// 继承类并且实现接口
class Web extends Programmer implements Person {
    constructor(name: string) {
        super(name)
    }
    eat() {
        console.log(this.name + '吃')
    }
    work() {
        console.log(this.name + '工作');
    }
}

var w = new Web('小李');
w.eat();
w.coding('写ts代码');

```