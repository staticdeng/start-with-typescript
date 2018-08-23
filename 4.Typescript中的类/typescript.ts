/**
 * typescript中的类
 * 1.ts类的定义
 * 2.继承
 * 3.ts类里面的修饰符
 * 4.静态属性和静态方法
 * 5.多态
 * 6.抽象类和抽象方法
 */

/**
 * 1.ts中类的定义
 * 和es6类的定义一样
*/
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
console.log(define.run())

/**
 * 2.继承
 * 用extends super实现继承
 */
class WebExtend extends PersonDefine {
    constructor(name:string) {
        super(name) // super继承父类的构造函数，并向父类构造函数传参
    }
    work():string {
        return `${this.name}在工作`
    }
}

var extend = new WebExtend('继承')
console.log(extend.run())
console.log(extend.work())

/**
 * 3.ts类里面的修饰符
 * 修饰符：typescript里面定义属性的时候给我们提供了三种修饰符
 * public:公有修饰符，在当前类里面、子类、类外面都可以访问
 * protected：保护类型，在当前类里面、子类里面可以访问，在类外部没法访问
 * private ：私有修饰符，在当前类里面可以访问，子类、类外部都没法访问
 * 属性如果不加修饰符，默认就是公有修饰符
 */


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
console.log(privateName.run())
// console.log(privateName.name) // 报错，外部不能访问类的私有属性

/**
 * 4.静态属性和静态方法 
 * 为什么要用静态属性和静态方法？jq里面的$.ajax就是用的静态方法
 */

/*
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
*/

// ts中实现静态属性和静态方法用static

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

/**
 * 5.多态 
 * 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类的该方法有不同的表现
 * 多态属于继承
 */

// 比如定义一个父类Animal，里面的eat方法不去实现，让子类Dog和Cat分别实现自己的eat方法
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

/**
 * 6.抽象类和抽象方法
 * 抽象类：它是提供其他类继承的基类，不能直接被实例化，子类继承可以被实例化
 * 定义：用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类(抽象类的子类)中实现。
 * abstract修饰的方法(抽象方法)只能放在抽象类里面
 * 抽象类和抽象方法用来定义标准(比如定义标准为：抽象类Animal有抽象方法eat，要求它的子类必须包含eat方法)
 */

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