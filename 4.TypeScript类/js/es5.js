/**
 * es5中的类
 * 内容为：类的定义、静态方法、继承（对象冒充继承，原型链继承，对象冒充 + 原型链组合继承）
 * 了解本质看这个文档觉得很好http://caibaojian.com/javascript-object-5.html
 */

/**
 * 1.类的定义
 * es5类在构造函数和原型链里都可以添加属性和方法，原型链上的属性会被多个实例所共享，而构造函数则不会
*/
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

// 2.静态方法
Person.getInfo=function(){
    console.log('我是静态方法');
}

// 调用静态方法不需要实例化
Person.getInfo();

/**
 * 3.实现继承
 * 对象冒充(或者叫构造函数继承)继承：可以继承构造函数里面的属性和方法，但是没法继承原型链上面的属性和方法
 * 原型继承:可以继承构造函数里面的属性和方法，也可以继承原型链上面的属性和方法，但是实例化子类的时候没法给父类传参
 */

function Worker(name,age){
    this.name=name;  /*属性*/
    this.age=age;
    this.run=function(){  /*实例方法*/
        console.log(this.name+'在运动');
    }

}      
Worker.prototype.sex="男";
Worker.prototype.work=function(){
    console.log(this.name+'在工作');
}
    
function Web(name,age){
    Worker.call(this,name,age);  // 对象冒充继承，可以继承构造函数里面的属性和方法，实例化子类可以给父类传参
}
// Web.prototype = new Worker();  // 原型链继承方法一：继承Worker构造函数和原型上所有的方法和属性
Web.prototype = Worker.prototype;  //原型链继承方法二：优化了方法一重复继承构造函数属性和方法的问题（本质可以看看http://caibaojian.com/javascript-object-5.html）

var w = new Web('赵四',20);   
w.run();
w.work();