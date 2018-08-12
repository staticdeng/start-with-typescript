"use strict";
// Typescript函数
// 1.1 函数的定义
// es5定义函数有函数声明法和匿名函数法
// 法一：函数声明法
function run() {
    return 'run';
}
/**
// 错误写法
function run():string {
    return 123
}
*/
// 法二：匿名函数
var run2 = function () {
    return 'run2';
};
console.log('函数定义一', run());
console.log('函数定义二', run2());
// 1.2 ts中定义方法传参
function paramFuc(name, age) {
    return name + " --- " + age;
}
console.log('函数传参', paramFuc('dz', 20));
// 1.3 没有返回值的方法用void
function voidFnc() {
    console.log('没有返回值的方法用void');
}
voidFnc();
// 2.可选参数
// es5里面方法的实参和行参可以不一样，但是ts中必须一样，如果不一样就需要在可选参数后加?
function electParam(name, age) {
    // 这里的age可传可不传，age就是可选参数
    if (age) {
        return name + " --- " + age;
    }
    else {
        return name + " --- \u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log('可选参数', electParam('dz'));
// 注意: 可选参数必须配置到参数的最后面
// 错误写法：可选参数不在最后面
// function electParam2(name?: string, age: number): string {
//     ...
// }
// 3. 默认参数
// es5里面没法设置默认参数，es6和ts中都可以设置默认参数
function defaultParam(name, age) {
    if (age === void 0) { age = 20; }
    return name + " --- " + age;
}
console.log('默认参数', defaultParam('dz'));
// 4. 剩余参数
// 当有很多参数时候或参数个数不确定，可以用三点运算符
// sum参数传过来的是一个数组
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log('剩余参数', sum(1, 2, 3, 4, 5, 6));
// a=1 b=2 其他参数为剩余参数
function sum2(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var sum = a * b;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log('剩余参数2', sum2(1, 2, 3, 4, 5, 6));
function getInfo(name, age) {
    if (age) {
        return '姓名：' + name + '年龄：' + age;
    }
    else {
        return '姓名：' + name;
    }
}
console.log(getInfo('dz'));
console.log(getInfo('dz', 20));
// console.log(getInfo(20)) // 错误
// 6. 箭头函数
setTimeout(function () {
    console.log('箭头函数');
}, 1000);
