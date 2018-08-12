"use strict";
// Typescript数据类型
//布尔类型（boolean）
{
    var flag = true;
    flag = false; // 正确
    // flag=123;  // 错误
}
// 数字类型（number）
{
    var num = 123;
    num = 456; // 正确 
    // num='str';    //错误
}
// 字符串类型(string)
{
    var str = 'this is ts';
    str = 'haha'; //正确
    // str=true;  //错误
}
// 数组类型（array）  ts中定义数组有两种方式
{
    // 第一种
    var arr = [1, 2, 3];
    // 第二种
    var arr2 = [1, 2, 3];
}
// 元组类型（tuple）元素的类型不必相同，写法和数组一样
{
    var arr_1 = [123, 'this is ts'];
}
// 枚举类型（enum）
/**
 * 用法：
 * enum 枚举名{
    标识符[=整型常数],
    标识符[=整型常数],
    ...
    标识符[=整型常数],
}
 */
{
    var Flag = void 0;
    (function (Flag) {
        Flag[Flag["success"] = 1] = "success";
        Flag[Flag["error"] = 2] = "error";
    })(Flag || (Flag = {}));
    ;
    var s = Flag.success; // 使用枚举类型中的值
    console.log('正确状态', s);
    var f = Flag.error;
    console.log('错误状态', f);
}
// 任意类型（any）
{
    var number = 123;
    number = 'str';
    number = true;
    console.log(num);
}
// null 和 undefined
{
    // 在js中，变量已声明但未初始化为undefined
    var undefinedTest;
    // console.log(undefinedTest) // 错误写法，typescript报错，赋值了才正确
    // 在typescript中，已声明未初始化的值要直接访问的话类型需要定义为undefined
    var undefinedTest2;
    console.log(undefinedTest2); // 正确写法，输出undefined 
}
{
    // 可能是number类型 可能是undefined
    var undefinedTest3;
    console.log(num);
}
{
    // null是一个空指针对象，undefined是未初始化的变量。因此，可以把undefined看作是空的变量，而null看作是空的对象
    var nullTest;
    nullTest = null;
    // nullTest = {} // 错误，定义了类型是null，值必须为null
}
// void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
// 表示方法没有返回任何类型
function run() {
    console.log('run');
}
run();
// never类型: 表示的是那些永不存在的值的类型，例如异常
var a;
// a = 123 //错误写法
a = (function () {
    throw new Error('错误');
})();
