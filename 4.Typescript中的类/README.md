# Typescript中的类 

## es5中的类

内容概述：类的创建、静态方法、继承（对象冒充继承，原型链继承，对象冒充 + 原型链组合继承）  

es5中的面向对象、构造函数、原型与原型链本质可以看这个文档<http://caibaojian.com/javascript-object-5.html> , 个人觉得写得很清晰。

### 1.1 类的创建

es5类在构造函数和原型链里都可以添加属性和方法，原型链上的属性会被多个实例所共享，而构造函数则不会。

```js

function Person() {
    this.name = 'Ming'
    this.run = function() {
        console.log(this.name + '在运动')
    }
}

Person.prototype.sex = '男' // 原型链上的属性会被多个实例所共享
Person.prototype.work = function() {
    console.log(this.name + '在工作')
}


var p = new Person()
p.run()
p.work()
console.log(p.name)

```

### 1.2 静态方法

> 调用静态方法不需要实例化

```js

Person.getInfo=function(){
    console.log('我是静态方法');
}
Person.getInfo();

```

### 1.3 实现继承

> 对象冒充(或者叫构造函数继承)继承：可以继承构造函数里面的属性和方法，但是没法继承原型链上面的属性和方法  

> 原型继承:可以继承构造函数里面的属性和方法，也可以继承原型链上面的属性和方法，但是实例化子类的时候没法给父类传参  

下面是通过**对象冒充 + 原型链**组合继承，解决了上面两种继承方式存在的问题

```js

function Worker(name,age){
    this.name=name;  /*属性*/
    this.age=age;
    this.run=function(){  /*实例方法*/
        alert(this.name+'在运动');
    }

}      
Worker.prototype.sex="男";
Worker.prototype.work=function(){
    alert(this.name+'在工作');
}
    
function Web(name,age){
    Worker.call(this,name,age);  // 对象冒充继承，可以继承构造函数里面的属性和方法，实例化子类可以给父类传参
}
// Web.prototype = new Worker();  // 原型链继承方法一：继承Worker构造函数和原型上所有的方法和属性
Web.prototype = Worker.prototype;  //原型链继承方法二：优化了方法一重复继承构造函数属性和方法的问题（本质可以看看http://caibaojian.com/javascript-object-5.html）

var w = new Web('赵四',20);   
w.run();
w.work();

```

从上面可以看出，对象冒充继承是在子类Web构造函数里面通过call方法继承父类Worker的构造函数的属性和方法；原型链继承通过子类Web的原型对象等于父类Worker的原型对象来实现继承；最后这两种继承的组合方式实现了完美继承。

## typescript中的类

内容概述： ts中类的定义、继承、类修饰符、静态属性和静态方法、多态、抽象类和抽象方法

### 2.1 ts中类的定义

ts中类的定义和es6类的定义一样

```js

class PersonDefine {
    name: string // 属性，前面省略了public关键词
    constructor(name:string) { //构造函数
        this.name = name
    }
    run():string { // 原型
        return `${this.name}在运动`
    }
}
var define = new PersonDefine('类的定义')
alert(define.run())

```

### 2.2 继承

> ts中继承比es5简单很多，用extends super实现继承

```js

class WebExtend extends PersonDefine {
    constructor(name:string) {
        super(name) // super继承父类的构造函数，并向父类构造函数传参
    }
    work():string {
        return `${this.name}在工作`
    }
}

var extend = new WebExtend('继承')
alert(extend.run())
alert(extend.work())

```

### 2.3 ts类里面的修饰符

修饰符：typescript里面定义属性的时候给我们提供了三种修饰符

* public: 公有修饰符，在当前类里面、子类、类外面都可以访问
* protected：保护类型，在当前类里面、子类里面可以访问，在类外部没法访问
* private ：私有修饰符，在当前类里面可以访问，子类、类外部都没法访问

注意：属性如果不加修饰符，默认就是公有修饰符

```js

// 以private为例
class PersonPrivate{
    private name:string;  /*被private修饰的属性 => 私有属性*/
    constructor(name:string){
        this.name=name;
    }
    run():string{
        return `${this.name}在运动` // 私有属性只能在当前类里面可以访问
    }
}

class Web extends PersonPrivate{
    constructor(name:string){
        super(name)
    }
    work(){
        // return `${this.name}在工作` // 报错，子类不能访问父类的私有属性
    }
}
 
var privateName = new PersonPrivate('private')
alert(privateName.run())
// console.log(privateName.name) // 报错，外部不能访问类的私有属性

```

### 2.4静态属性和静态方法

> 为什么要用静态属性和静态方法？jq里面的$.ajax就是用的静态方法

```js

function $(element) {
    return new Base(element)
}

function Base(element) {
    this.element = document.getElementById(element)
    this.css = function(arr, value) {
        this.element.style[arr] = value
    }
}
$('box').css('color','red')
$.ajax = function() {}  // 想要在$上使用方法怎么办，用静态方法

```

> ts中实现静态属性和静态方法用static

```js

class PersonStatic{
    /*公有属性*/
    public name:string;
    constructor(name:string) {
        this.name=name;
    }
    /*实例方法（需要被实例化，所以为实例方法）*/
    run(){  
        return `${this.name}在运动`
    }
    /*静态属性*/
    static sex = '男'
    /*静态方法，里面没法直接调用类里面的属性*/
    static info(){  
        // return 'info方法' + this.name  // 静态方法不能调用本类的方法和属性，可以调用静态属性
        return 'info方法' + PersonStatic.sex
    }
}

console.log('静态方法' + PersonStatic.info())
console.log('静态属性' + PersonStatic.sex)

```

### 2.5多态

> 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类的该方法有不同的表现  

* 多态属于继承

比如定义一个父类Animal，里面的eat方法不去实现，让子类Dog和Cat分别实现自己的eat方法

```js

class Animal {
    name:string;
    constructor(name:string) {
        this.name=name;
    }
    eat(){   // eat方法继承它的子类去实现
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name+'吃粮食'
    }
}

class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name+'吃老鼠'
    }
}

```

### 2.6抽象类和抽象方法

> 定义：用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类(抽象类的子类)中实现

* 抽象类：它是提供其他类继承的基类，不能直接被实例化，子类继承可以被实例化
* abstract修饰的方法(抽象方法)只能放在抽象类里面
* 抽象类和抽象方法用来定义标准(比如定义标准为：抽象类Animal有抽象方法eat，要求它的子类必须包含eat方法)

```js

abstract class AnimalAbst{
    public name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract eat():any;  //抽象方法不包含具体实现并且必须在派生类中实现
    run(){
        console.log('其他方法可以不实现')
    }
}
// var a = new Animal() /*错误的写法，抽象类不能被实例化*/

class DogAbst extends Animal{
    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
        super(name)
    }
    eat(){
        return this.name + '吃粮食'
    }
}

var d = new DogAbst('小花花');
console.log('抽象类和抽象方法',d.eat());

```