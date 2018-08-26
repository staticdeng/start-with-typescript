"use strict";
/**
 * typescript接口
 * 接口定义：接口是对传入参数进行约束；或者对类里面的属性和方法进行声明和约束，实现这个接口的类必须实现该接口里面属性和方法；typescript中的接口用interface关键字定义。
 * 接口作用：接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。
            typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
 * 内容概述：接口分类：属性接口、函数类型接口、可索引接口、类类型接口，接口的继承
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 1.1 属性接口
 * 对传入对象的约束（也就是对json的约束）
*/
// 在了解接口之前，我们来看看函数传入obj参数
function printLabel(labelInfo) {
    return labelInfo;
}
// printLabel({name:'obj'});  //错误的写法
console.log(printLabel({ label: 'obj' }));
function printFullName(name) {
    // 传入对象必须包含firstName和secondName，可传可不传age
    return name;
}
var obj = {
    firstName: '小',
    secondName: '明',
    age: 20
};
console.log(printFullName(obj));
function ajax(config) {
    var xhr = new XMLHttpRequest;
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    data: 'name=xiaoming',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
});
var md5 = function (key, value) {
    // encrypt对加密方法md5进行约束，同时md5方法的参数和返回值类型和encrypt要保持一致
    return key + value;
};
console.log(md5('name', '小明'));
/**
 * 1.3 可索引接口
 * 对索引和传入参数的约束（一般用于对数组、对象的约束）
*/
// ts中定义数组
var arr1 = [1, 2];
var arr2 = ['1', '2'];
var userarr = ['a', 'b'];
console.log(userarr);
var userobj = { name: '小明', sex: '男' };
console.log(userobj);
// 类实现接口要用implements关键字，必须实现接口里面声明的方法和属性
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function (food) {
        console.log(this.name + '吃' + food);
    };
    return Cat;
}());
var cat = new Cat('小花');
cat.eat('老鼠');
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programmer;
}());
// 继承类并且实现接口
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function () {
        console.log(this.name + '吃');
    };
    Web.prototype.work = function () {
        console.log(this.name + '工作');
    };
    return Web;
}(Programmer));
var w = new Web('小李');
w.eat();
w.coding('写ts代码');
